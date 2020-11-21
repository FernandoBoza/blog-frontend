import { fromPromise } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Head from 'next/head';
import styles from "../styles/blog.module.scss";

const Article = (data) => {
    let article = data.data;
    let categorty_title = article.__typename.replace('Articles', '');

    return (
        <section className='container'>
            <Head>
                <title>Fernando Boza | {article.title}</title>
            </Head>
            <div className="row">
                <div className="col">
                    <Link href={'/' + categorty_title.toLowerCase()}>
                        <a>
                            <h3><i className="fas fa-chevron-left"></i> Back To {categorty_title}</h3>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <h1 className='mt-5'>{article.title}</h1>
                    <img className='img-fluid my-5' src="https://via.placeholder.com/1200x600" alt="" />
                    <div id={styles.content}>
                        {/* <ReactMarkdown source={article.articleBase.content} /> */}
                        <div dangerouslySetInnerHTML={{ __html: article.articleBase.content }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Article;



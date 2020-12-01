import { fromPromise } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Head from 'next/head';
import styles from "../styles/blog.module.scss";

const Article = (data) => {
    const article = data.data;
    const category_title = article.__typename.replace('Articles', '');
    const imgPath = article.articleBase.image.length > 0 ? article.articleBase.image[1].url : "https://via.placeholder.com/1200x600";
    const projURL = () => {
        if (article.articleBase.url != null) {
            return (
                <Link href={article.articleBase.url}><a target="_blank" className="btn btn-primary">View Project</a></Link>
            )
        }
    };
    return (
        <section className='article container'>
            <Head>
                <title>Fernando Boza | {article.title}</title>
            </Head>

            <Link href={'/' + category_title.toLowerCase()}>
                <a>
                    <h4><i className="fas fa-chevron-left" /> Back To {category_title}</h4>
                </a>
            </Link>

            <div className="d-flex mt-5 flex-sm-column flex-md-column flex-lg-row">
                <div className="mr-auto"><h1>{article.title}</h1></div>
                {projURL()}
            </div>

            <img className='article-image img-fluid my-5' src={imgPath} />

            <div id={styles.content} dangerouslySetInnerHTML={{ __html: article.articleBase.content }} />

        </section>
    );
};

export default Article;



import Link from "next/link";
import Head from 'next/head';
import styles from "../styles/blog.module.scss";
const isServer = typeof window === 'undefined'

const Article = ({ article }) => {
    const category_title = article.__typename.replace('Articles', '');
    const imgPath = article.articleBase.image.length > 0 ? article.articleBase.image[1].url : "https://via.placeholder.com/1200x600";
    const projURL = () => {
        if (article.articleBase.url != null) {
            return (
                <div>
                    <Link href={'/' + category_title.toLowerCase()}>
                        <a className='text-capitalize btn btn-warning'>
                            <i className="fas fa-chevron-left" /> Back To {category_title}
                        </a>
                    </Link>
                    <Link href={article.articleBase.url}>
                        <a className='btn btn-primary text-capitalize ml-3' target="_blank">
                            <i className="fas fa-external-link-square-alt"></i>
                        View Project</a>
                    </Link>
                </div>
            )
        }
    };
    return (
        <section className='article container'>
            <Head>
                <title>Fernando Boza | {article.title}</title>
            </Head>

            <div className="d-flex mt-5 flex-column flex-lg-row">
                <div className="mr-auto"><h1 className='wow fadeInDown'>{article.title}</h1></div>
                {projURL()}
            </div>

            {/*<img className='article-image img-fluid my-5 wow fadeInUp' src={imgPath} />*/}

            <div className='wow fadeInUp' id={styles.content} dangerouslySetInnerHTML={{ __html: article.articleBase.content }} />

        </section>
    );
};

export default Article;

import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head';
import styles from "../styles/blog.module.scss";
import Fade from 'react-reveal/Fade';

const Article = ({ article }) => {
    const category_title = article.__typename.replace('Articles', '');
    const imgPath = article.articleBase.image.length > 1 ? article.articleBase.image[1].url : "http://via.placeholder.com/1200x600?text=COMMING+SOON";
    const projURL = () => {
        if (article.articleBase.url != null) {
            return (
                <div>
                    <Link href={'/' + category_title.toLowerCase()}>
                        <a className='text-capitalize btn btn-outline-warning'>
                            <i className="fas fa-chevron-left" /> Back To {category_title}
                        </a>
                    </Link>
                    <Link href={article.articleBase.url}>
                        <a className='btn btn-outline-primary text-capitalize ml-3' target="_blank">
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

            <div className="d-flex my-5 flex-column flex-lg-row">
                <Fade left>
                    <div className="mr-auto"><h1 className=''>{article.title}</h1></div>
                </Fade>
                <Fade right>
                    {projURL()}
                </Fade>
            </div>
            <Fade delay={1000} down>
                <Image
                    width={1200}
                    height={600}
                    className='article-image img-fluid'
                    src={imgPath}
                />
            </Fade>

            <Fade up>
                <div className='' id={styles.content} dangerouslySetInnerHTML={{ __html: article.articleBase.content }} />
            </Fade>

        </section>
    );
};

export default Article;

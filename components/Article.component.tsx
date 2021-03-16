import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head';
import styles from "../styles/blog.module.scss";
import Fade from 'react-reveal/Fade';

const Article = ({ article }) => {
    const category_title = article?.__typename.replace('Articles', '');
    const projURL = () => {
        try {
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
                                <i className="fas fa-external-link-square-alt"/>
                                View Project</a>
                        </Link>
                    </div>
                )
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <section className='article container'>
            <Head>
                <title>Fernando Boza | {article?.title}</title>
            </Head>

            <style jsx>{`
                .articleTitleWidth {
                    width: 100%
                }
                
                @media only screen and (min-width: 600px) {
                    .articleTitleWidth {
                        width: 75%
                    }
                }
            `}</style>

            <div className="d-flex my-5 flex-column flex-lg-row">
                <Fade left>
                    <div className="mr-auto articleTitleWidth"><h1 className=''>{article?.title}</h1></div>
                </Fade>
                <Fade right>
                    {projURL()}
                </Fade>
            </div>
            <Fade duration={1000} delay={500} down>
                {
                    article && article.articleBase.image[1] ?
                        <Image
                            width={1200}
                            height={600}
                            className='article-image img-fluid'
                            src={article.articleBase.image[1].url}
                        /> :
                        article ?
                        <Image
                            width={1200}
                            height={600}
                            className='article-image img-fluid'
                            src={article.articleBase.image[0].url}
                        /> : ""
                }
            </Fade>

            <Fade up>
                <div className='mt-5' id={styles.content} dangerouslySetInnerHTML={{ __html: article?.articleBase.content }} />
            </Fade>

        </section>
    );
};

export default Article;

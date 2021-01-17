import Link from "next/link";
import Fade from 'react-reveal/Fade';

const PortfolioCard = ({ article }) => {
    const { title, articleBase, slug } = article;

    return (
        <Link href={`/portfolio/${slug}`}>
            <a className="card portfolio-card">
                <style jsx>{`
            .card-img {
                border-radius: 7px;
            }

            h4 {
                font-size: 1.2rem
            }

            @media (prefers-color-scheme: light) {
                $color: #333;
                .card {
                    background-color: #f7f7f7;
                    color: #333;
                }
                .date-badge {
                    background: #2afabc;
                }

                img {
                    content: url(${articleBase.image[0].url})
                }
            }
            @media (prefers-color-scheme: dark) {
                .card {
                    background-color: #333;
                    color: #f7f7f7;
                }
                .date-badge {
                    background: #5088f9;
                }

                img {
                    transition: box-shadow .4s;
                    content: url(${articleBase.image[1].url})
                }

                .card:hover img {
                    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
                }
            }

            

            `}</style>
                <img className="card-img" alt="Card image cap" />
                <div className="card-body pl-0">
                    <h4 className="card-title font-weight-bold">{title}</h4>
                </div>
            </a>
        </Link>
    )
}


export default PortfolioCard
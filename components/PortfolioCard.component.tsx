import Link from "next/link";
import Fade from 'react-reveal/Fade';

const PortfolioCard = ({ article }) => {
    const { title, articleBase, slug } = article;

    return (
        <Link href={`/portfolio/${slug}`}>
            <a className="card">
                <style jsx>{`
            .card-img {
                border-radius: 7px;
            }

            .card {
                border-radius: 8px;
                box-shadow: none;
                transition: box-shadow .5s;
                width: 383px;
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
                    content: url(${articleBase.image[1].url})
                }
            }
            `}</style>
                <img className="card-img shadow-lg" alt="Card image cap" />
                <div className="card-body pl-0">
                    <h4 className="card-title font-weight-bold">{title}</h4>
                </div>
            </a>
        </Link>
    )
}


export default PortfolioCard
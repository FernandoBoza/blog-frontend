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

                #portfolio-card:hover {
                    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.2);
                }
            }
            @media (prefers-color-scheme: dark) {
                .card {
                    background-color: rgb(50,50,50); 
                    color: #f7f7f7;
                }

                .card:hover img {
                    box-shadow: 0 1rem 3rem rgba(0,0,0,.4)!important;
                }
            }

            

            `}</style>
                <img className="card-img" alt="Card image cap" src={`${articleBase.image[0].url}`} />
                <div className="card-body pl-0">
                    <h4 className="card-title font-weight-bold">{title}</h4>
                </div>
            </a>
        </Link>
    )
}


export default PortfolioCard

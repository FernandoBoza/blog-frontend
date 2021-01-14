import Link from "next/link";
import { publishDate, shortenContent } from "../utils/SharedPlans";

const PortfolioCard = ({ article }) => {
    const { title, articleBase, slug } = article;
    const img = 'http://via.placeholder.com/337x250';
    // const img = articleBase.image[1] ? articleBase.image[1].url : 'http://via.placeholder.com/337x200';

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
                transition: box-shadow .5s
            }

            h4 {
                font-size: 1.2rem
            }

            .overflow-image {
                position: relative;
                overflow: hidden
            }

            .overflow-image img {
                transition: opacity .4s
            }
            
            .overflow-image:hover img {
                opacity: .5;
            }

            .overflow-image p {
                position: absolute;
                bottom: -14%;
                opacity: 0;
                padding: 1rem;
                font-size: 1.4rem;
                transition: opacity .5s, bottom .6s;
            }  
            
            .overflow-image:hover p {
                opacity: 1;
                bottom: 4%;
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
            }
            @media (prefers-color-scheme: dark) {
                .card {
                    background-color: #333;
                    color: #f7f7f7;
                }
                .date-badge {
                    background: #5088f9;
                }
            }
            `}</style>
                <div className="overflow-image">
                    <img className="card-img shadow-lg" src={img} alt="Card image cap" />
                    <p className="card-text d-sm-none d-lg-block">{shortenContent(articleBase.content, 80)}</p>
                </div>
                <div className="card-body pl-0">
                    <h4 className="card-title font-weight-bold">{title}</h4>
                </div>
            </a>
        </Link>
    )
}


export default PortfolioCard
import Link from "next/link";
import { publishDate, shortenContent } from "../utils/SharedPlans";

const PortfolioCard = ({ article }) => {
    const { title, articleBase } = article;
    const img = articleBase.image[1] ? articleBase.image[1].url : 'http://via.placeholder.com/337x200';

    return (
        <div className="card">
            <style jsx>{`
            .card-img-top {
                border-radius: 7px;
            }

            .card {
                border-radius: 8px;
                box-shadow: none;
                transition: box-shadow .5s
            }

            // .card:hover {
            //     box-shadow: 0px 5px 8px rgba(0,0,0,.3);
            // }

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
            <img className="card-img-top shadow-lg" src={img} alt="Card image cap" />
            <div className="card-body pl-0">
                <h4 className="card-title font-weight-bold">{title}</h4>
                {/* <p className="card-text">{shortenContent(articleBase.content,)}</p> */}
            </div>
        </div>
    )
}


export default PortfolioCard
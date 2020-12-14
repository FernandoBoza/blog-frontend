import React from "react";
import Link from "next/link";
import { publishDate } from "../utils/Dates";
import { shortenContent } from "../utils/SharedPlans";

const Card = ({ article }) => {
    const path = article.__typename.toLowerCase().replace('articles', '/') + article.slug;
    const imgPath = article.articleBase.image.length > 0 ? article.articleBase.image[0].url : "https://via.placeholder.com/200x240";
    let color = article.__typename.toLowerCase().replace('articles', '')
    return (
        <Link href={path}>
            <a href={path} className="card_custom card mb-3 wow fadeInDown" data-wow-delay=".7s">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imgPath} className="card-img rounded" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className={"card-title bg-" + color}>{article.title}</h5>
                            <p className="card-text">{shortenContent(article.articleBase.content, 70)}</p>
                            <p className="card-text"><small className="text-muted">{publishDate(article.published_at)}</small></p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card

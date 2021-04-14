import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { publishDate } from "../utils/SharedPlans";
import { shortenContent } from "../utils/SharedPlans";

const Card = ({ article }) => {
    const path = article.__typename.toLowerCase().replace('articles', '/') + article.slug;
    const imgPath = article.articleBase.image.length > 0 ? article.articleBase.image[0].url : "http://via.placeholder.com/200x240";
    let color = article.__typename.toLowerCase().replace('articles', '')
    return (
        <Link href={path}>
            <a className="card_custom card mb-3">
                <style jsx>{`
            .card {
                background-color: transparent;
                border: none;
           }
            .card-body {
                padding: 1rem 0 0 1rem;
                justify-content: space-between;
                height: 100%;
                flex-direction: column;
                display: flex;
           }
            .card-body p.card-text:nth-last-child(2) {
                height: 70px;
           }
            .card_custom {
                transition: box-shadow 0.4s;
                padding: 1rem;
           }
            .card_custom img.card-img.rounded {
                transition: box-shadow 0.5s;
           }
            .card_custom .card-title {
                transition: background 0.4s, color 0.35s;
                padding: 0.5rem;
                border-radius: 4px;
           }
            .card_custom:hover {
                box-shadow: 0px 5px 10px 0px #000 12;
           }
            .card_custom:hover img.card-img.rounded {
                box-shadow: 0px 0px 16px 0px #000 59;
           }
            .card_custom:hover .card-title {
                color: white;
           }
            .card_custom:hover .card-title.bg-portfolio {
                background-color: #4caf50;
           }
            .card_custom:hover .card-title.bg-blog {
                background-color: #0c7cd5;
           }
            
            `}</style>
                <div className="row no-gutters">
                    <div className="col-md-4 col-lg-6">
                        <Image
                            src={imgPath}
                            width={200}
                            height={240}
                            className="card-img rounded"
                            alt={article.title}
                        />
                    </div>
                    <div className="col-md-8 col-lg-6">
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

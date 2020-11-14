import React from "react";
import Link from "next/link";
import {publishDate} from '../Utils/Dates.utils'

const Card = ({ article }) => {

    let path = article.__typename.toLowerCase().replace('articles', 's/') + article.slug;

    return (
        <Link href={path}>
            <a href={path} className="card_custom card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/200x240" className="card-img rounded" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.articleBase.content}</p>
                            <p className="card-text"><small className="text-muted">{publishDate(article.published_at)}</small></p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;

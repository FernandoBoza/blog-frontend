import React from "react";
import Link from "next/link";

const Card = ({ article }) => {

    const publishDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    }

    let path = article.__typename.toLowerCase().replace('articles', 's/') + article.slug;

    return (
        <Link href={path}>
            <a href={path} className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/200" className="card-img" alt="..." />
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

import { fromPromise } from "@apollo/react-hooks";
import React from "react";

const Article = (data) => {
    let article = data.data;

    return (
        <section className='container'>
            <div className="row text-center">
                <div className="col">
                    <h1 className='mt-5'>{article.title}</h1>
                    <img className='img-fluid my-5' src="https://via.placeholder.com/1200x400" alt="" />
                    <p>{article.articleBase.content}</p>
                </div>
            </div>
        </section>
    );
};

export default Article;

import React from "react";


const Article = (data) => {
    let article = data.data
    return (
        <section className='container'>
            <div className="row text-center">
                <div className="col">
                    <h1>{article.title}</h1>
                    <p>{article.articleBase.content}</p>
                    <img className='img-fluid' src="https://via.placeholder.com/1200x400" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Article;

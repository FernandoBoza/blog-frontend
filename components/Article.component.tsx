import React from "react";


const Article = (data) => {
    let article = data.data
    return (
        <section className='container'>
            <h1>{article.title}</h1>
            <p>{article.articleBase.content}</p>
        </section>
    );
};

export default Article;

import React from "react";


const jobArticle = (data) => {
    let jobArticle = data.data
    return (
        <section className='container'>
            <div className="row text-center">
                <div className="col">
                    <h1>{jobArticle.title}</h1>
                    <p>{jobArticle.content}</p>
                </div>
            </div>
        </section>
    );
};

export default jobArticle;

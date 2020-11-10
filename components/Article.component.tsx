import React from "react";

const Article = ({ articles }) => {
    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {/* {articles.map((article, i) => {
            return <Card article={article} key={`article__${article.article.slug}`} />;
          })} */}
                </div>
            </div>
        </div>
    );
};

export default Article;

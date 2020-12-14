import { useRouter } from "next/router";
import Query from "../../components/Query.component";
import Article from "../../components/Article.component";
import React from "react";
import SINGLE_QUERY from "../../apollo/queries/singleArticleQuery.query";

const PortfolioArticle = () => {
    const router = useRouter();
    return (
        <Query slug={router.query.slug} query={SINGLE_QUERY('portfolio')}>
            {({ data }) => {
                let portfolio = data.portfolioArticles[0];
                return (
                    <Article data={portfolio} />
                );
            }}
        </Query>
    );
};

export default PortfolioArticle;

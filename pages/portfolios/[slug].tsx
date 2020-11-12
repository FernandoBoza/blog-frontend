import { useRouter } from "next/router";
import Query from "../../components/Query.component";
import PORTFOLIO_ARTICLE_QUERY from '../../apollo/queries/Portfolio/Portfolio.query'
import Article from "../../components/Article.component";
import React from "react";

const PortfolioArticle = () => {
    const router = useRouter();
    return (
        <Query slug={router.query.slug} query={PORTFOLIO_ARTICLE_QUERY}>
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

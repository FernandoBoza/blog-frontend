import { useRouter } from 'next/router'
import React from 'react';
import SINGLE_QUERY from '../../apollo/queries/singleArticleQuery.query';
import Query from '../../components/Query.component';
import ArticleComp from "../../components/Article.component";

const Article = () => {
    const router = useRouter();
    console.log(router.query);

    return <Query slug={router.query.slug} query={SINGLE_QUERY(router.query.category)}>
        {({ data }) => {
            let article = data[router.query.category + 'Articles'][0]
            return (
                <ArticleComp article={article} />
                // <h1>Hello</h1>
            );
        }}
    </Query>
}
export default Article;
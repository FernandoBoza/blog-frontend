import { useRouter } from "next/router";
import Query from "../../components/Query.component";
import Article from "../../components/Article.component";
import React from "react";
import SINGLE_QUERY from "../../apollo/queries/singleArticleQuery.query";

const BlogArticle = () => {
    const router = useRouter();
    return (
        <Query slug={router.query.slug} query={SINGLE_QUERY('blog')}>
            {({ data }) => {
                let blog = data.blogArticles[0];
                return (
                    <Article data={blog} />
                );
            }}
        </Query>
    );
};

export default BlogArticle;

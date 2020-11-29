import { useRouter } from "next/router";
import Query from "../../components/Query.component";
import BLOG_ARTICLE_QUERY from '../../apollo/queries/Blog/Blog.query'
import Article from "../../components/Article.component";
import React from "react";

const BlogArticle = () => {
    const router = useRouter();
    return (
        <Query slug={router.query.slug} query={BLOG_ARTICLE_QUERY}>
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

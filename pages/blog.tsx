import Head from 'next/head'
import Query from "../components/Query.component";
import BLOGS_ARTICLES_QUERY from "../apollo/queries/Blog/Blogs.query";
import { getItemsInCol } from '../utils/SharedPlans'

const Blog = () => {
    return (
        <div className='container'>
            <Head>
                <title>Fernando Boza | Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="row">
                <div className="col">
                    <h1>Blog</h1>
                </div>
            </div>
            <Query slug query={BLOGS_ARTICLES_QUERY}>
                {({ data }) => {
                    return (
                        getItemsInCol(data, 'blog')
                    );
                }}
            </Query>
        </div>
    )
}

export default Blog

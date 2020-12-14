import Head from 'next/head'
import Query from "../components/Query.component";
import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery'
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
                    <h1>Blog 👨‍💻</h1>
                    <p>I often experiement and ticker with frameworks, theory and such so if I do happen to document it, i'll report it via here.</p>
                </div>
            </div>
            <Query slug query={ARTICLE_QUERY('blog')}>
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

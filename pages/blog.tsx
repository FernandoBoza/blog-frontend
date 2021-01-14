import Head from 'next/head'
import Query from "../components/Query.component";
import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery'
import { getItemsInCol } from '../utils/SharedPlans'
import Fade from 'react-reveal/Fade';

const Blog = () => {
    return (
        <div className='blog-container container'>
            <Head>
                <title>Fernando Boza | Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="row">
                <Fade top cascade>
                    <div className="col">
                        <h1 className='title'>Blog 👨‍💻</h1>
                        <p>I often experiement and ticker with frameworks, theory and such so if I do happen to document it, i'll report it via here.</p>
                    </div>
                </Fade>
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

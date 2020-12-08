import Query from "../components/Query.component";
import BLOGS_ARTICLES_QUERY from "../apollo/queries/Blog/Blogs.query";
import { getItemsInCol } from '../Utils/SharedPlans'

const Blog = () => {
    return (
        <div className='container'>
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

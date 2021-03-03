import Head from 'next/head'
// import Query from "../components/Query.component";
// import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery'
import { getItemsInColBlog } from '../utils/SharedPlans'
import Fade from 'react-reveal/Fade';
import { request } from 'graphql-request'
import useSWR from "swr";
import BlogCard from "../components/BlogCard.component";

const Blog = () => {
    const fetcher = async query => await request('https://fb-cms.herokuapp.com/graphql', query)
    const { data, error } = useSWR(
        `{
            blogArticles {
            title,
            slug,
           articleBase {
              content
              url
              image {
                url
              }
            }
          }
        }`,
        fetcher
    )
    return (
        <div className='blog-container container'>
            <Head>
                <title>Fernando Boza | Blogs</title>
            </Head>
            <div className="row">
                <Fade top cascade>
                    <div className="col">
                        <h1 className='title'>Blog 👨‍💻</h1>
                        <p>I often experiement and ticker with frameworks, theory and such so if I do happen to document it, i'll report it via here.</p>
                    </div>
                </Fade>
            </div>

            {
                data?.blogArticles.map(blog => {
                    return (
                        <Fade key={blog.slug} left>
                            <BlogCard article={blog} />
                        </Fade>
                    )
                })
            }
        </div>
    )
}
export default Blog

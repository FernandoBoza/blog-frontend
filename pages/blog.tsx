import Head from 'next/head'
import Fade from 'react-reveal/Fade';
import { request } from 'graphql-request'
import useSWR from "swr";
import BlogCard from "../components/BlogCard.component";

const Blog = () => {
    const fetcher = async query => await request('https://fb-cms.herokuapp.com/graphql', query)
    const { data, error } = useSWR(
        `{
            blogArticles(sort: "published_at:desc") {
            title,
            slug,
            published_at,
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
            <Head><title>Fernando Boza | Blogs</title></Head>
            <div className="row">
                <Fade top cascade>
                    <div className="col">
                        <h1 className='title'>Blog 👨‍💻</h1>
                        <p>I often experiment and ticker with frameworks, theory and such so if I do happen to document it, i'll report it via here.</p>
                    </div>
                </Fade>
            </div>

           <div className="card-container row row-cols-3">
               {data?.blogArticles.map(blog => {
                    return (
                       <div key={blog.slug} className="col">
                           <Fade left>
                               <BlogCard article={blog} />
                           </Fade>
                       </div>
                   )
               })}
           </div>
        </div>
    )
}
export default Blog

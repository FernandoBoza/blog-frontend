import Link from "next/link";
import { publishDate, shortenContent } from "../utils/SharedPlans";

const BlogCard = ({ article }) => {
    const { title, slug, articleBase, published_at } = article;
    const img = articleBase.image[0] ? articleBase.image[0].url : 'http://via.placeholder.com/384x228';

    let d = publishDate(published_at).split(' '),
        month = d[0],
        day = d[1];
    return (
        <Link href={`/blog/${slug}`}>
            <a id='blog-card' className="card">
                <style jsx>{`
                .card-img {
                    transform: scaleX(0.95) scaleY(0.9);
                    border-radius: 7px;
                }
    
                .card-title {
                    height: 3rem;
                }
    
                .date-badge {
                    position: absolute;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                }
    
                .date-badge h5 {
                    display: flex;
                    flex-direction: column;
                }
    
                a {
                    font-size: .8rem;
                }
    
                .card-text {
                    opacity: .7
                }
    
                @media (prefers-color-scheme: light) {
                    .card {
                        background-color: #f7f7f7;
                        color: #333;
                    }
                    .date-badge {
                        background: #2afabc;
                    }
    
                    #blog-card:hover {
                        box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.2);
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .card {
                        background-color: rgb(61,61,61);
                        color: #f7f7f7;
                    }
                    .date-badge {
                        background: #5088f9;
                    }
    
                    #blog-card:hover {
                        box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.4);
                    }
                }
                `}</style>
                <img className="card-img shadow-lg" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title font-weight-bold">{title}</h4>
                    <p className="card-text d-sm-none d-lg-block">{shortenContent(articleBase.content,)}</p>
                </div>
                <div className="date-badge shadow-lg">
                    <h5 className='font-weight-bold mb-0'>{month} <span>{day}</span>   </h5>
                </div>
            </a>
        </Link>
    )
}

export default BlogCard

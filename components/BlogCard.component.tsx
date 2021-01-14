import Link from "next/link";
import { publishDate, shortenContent } from "../utils/SharedPlans";

const BlogCard = ({ article }) => {
    const { title, slug, articleBase, published_at } = article;
    const img = 'http://via.placeholder.com/337x200';
    // const img = articleBase.image[1] ? articleBase.image[1].url : 'http://via.placeholder.com/337x200';

    let d = publishDate(published_at).split(' '),
        month = d[0],
        day = d[1];
    return (
        <div className="card">
            <style jsx>{`
            .card-img {
                transform: scaleX(0.95) scaleY(0.9);
                border-radius: 7px;
            }

            .card {
                border-radius: 8px;
                box-shadow: none;
                transition: box-shadow .5s
            }

            .card:hover {
                box-shadow: 0px 3px 16px rgba(0,0,0,.2);
            }

            .card-title {
                height: 3rem;
            }

            .date-badge {
                position: absolute;
                right: 2%;
                top: 43%;
                width: 50px;
                height: 50px;
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
                $color: #333;
                .card {
                    background-color: #f7f7f7;
                    color: #333;
                }
                .date-badge {
                    background: #2afabc;
                }
            }
            @media (prefers-color-scheme: dark) {
                .card {
                    background-color: #333;
                    color: #f7f7f7;
                }
                .date-badge {
                    background: #5088f9;
                }
            }
            `}</style>
            <img className="card-img shadow-lg" src={img} alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title font-weight-bold">{title}</h4>
                <p className="card-text d-sm-none d-lg-block">{shortenContent(articleBase.content,)}</p>
                <Link href={`/blog/${slug}`}><a className=" d-sm-none d-lg-block card-link font-weight-bold">Read Full Blog <i className="ml-2 fas fa-chevron-right"></i></a></Link>
            </div>
            <div className="date-badge shadow-lg">
                <h5 className='font-weight-bold'>{month} <span>{day}</span>   </h5>
            </div>
        </div>
    )
}

export default BlogCard
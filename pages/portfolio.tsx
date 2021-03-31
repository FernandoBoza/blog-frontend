import Head from 'next/head'
import Fade from 'react-reveal/Fade';
import { request } from 'graphql-request'
import useSWR from "swr";
import PortfolioCard from "../components/PortfolioCard.component";



const Portfolio = () => {
    const fetcher = async query => await request('https://fb-cms.herokuapp.com/graphql', query)
    const { data, error } = useSWR(
        `{
            portfolioArticles(sort: "published_at:desc") {
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
        <div className='portfolio-container container'>
            <Head><title>Fernando Boza | Portfolios</title></Head>
            <div className="row">
                <Fade top cascade>
                    <div className="col">
                        <h1 className='title'>Portfolio 🎯</h1>
                        <p>Here you can find my professional work for clients, agencies and such.</p>
                    </div>
                </Fade>
            </div>
            <div className="card-container row row-cols-1 row-cols-md-3">
                {data?.portfolioArticles.map(portfolio => {
                    return (
                        <div key={portfolio.slug} className="col">
                            <Fade left>
                                <PortfolioCard article={portfolio}/>
                            </Fade>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio

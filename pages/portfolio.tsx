import Head from 'next/head'
import Query from "../components/Query.component";
import PORTFOLIOS_ARTICLES_QUERY from "../apollo/queries/Portfolio/Portfolios.query";
import { getItemsInCol } from "../utils/SharedPlans";

const Portfolio = () => {
    return (
        <div className='container'>
            <Head>
                <title>Fernando Boza | Portfolios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="row">
                <div className="col">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <Query slug query={PORTFOLIOS_ARTICLES_QUERY}>
                {({ data }) => {
                    return (
                        getItemsInCol(data, 'portfolio')
                    );
                }}
            </Query>
        </div>
    )
}

export default Portfolio

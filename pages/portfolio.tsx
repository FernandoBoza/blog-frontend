import Head from 'next/head'
import Query from "../components/Query.component";
import ARTICLES_QUERY from "../apollo/queries/allArticlesQuery";
import { getItemsInCol } from "../utils/SharedPlans";
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    return (
        <div className='portfolio-container container'>
            <Head>
                <title>Fernando Boza | Portfolios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="row">
                <Fade top cascade>
                    <div className="col">
                        <h1>Portfolio 🎯</h1>
                        <p>Here you can find my professional work for clients, agencies and such.</p>
                    </div>
                </Fade>
            </div>
            <Query slug query={ARTICLES_QUERY('portfolio')}>
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

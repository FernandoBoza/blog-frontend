import Query from "../components/Query.component";
import PORTFOLIOS_ARTICLES_QUERY from "../apollo/queries/Portfolio/Portfolios.query";
import { getItemsInCol } from "../Utils/SharedPlans";

const Portfolio = () => {
    return (
        <div className='container'>
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

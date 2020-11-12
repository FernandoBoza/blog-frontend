import Query from "../components/Query.component";
import PORTFOLIOS_ARTICLES_QUERY from "../apollo/queries/Portfolio/Portfolios.query";
import Card from "../components/Card.component";

const Portfolio = () => {
    return (
        <div className='container'>
            <div className="row">
            <div className="col">
        <Query slug query={PORTFOLIOS_ARTICLES_QUERY}>
            {({ data }) => {
                return (
                    data.portfolioArticles.map(portfolio => {
                        return (
                            <Card key={portfolio.slug} article={portfolio}/>
                        )
                    })
                );
            }}
        </Query>
            </div>
            </div>
        </div>
    )
}

export default Portfolio

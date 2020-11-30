import Head from 'next/head'
import Link from "next/link";
import Query from "../components/Query.component"
import Card from "../components/Card.component"
import BLOGS_ARTICLES_QUERY from '../apollo/queries/Blog/Blogs.query'
import PORTFOLIOS_ARTICLES_QUERY from '../apollo/queries/Portfolio/Portfolios.query'
const Home = () => {
  return (
    <section className='Home container'>
      <Head>
        <title>Fernando Boza | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-4 mb-5">
          <h1 className='title'><span className='font-weight-light'>Fernando</span>
            <span>Boza</span>
          </h1>
          <p>I’m a 3D artist by trade, years in agency and
          marketing environment. While working in Paris I fell
          in love with the art and dynamics of coding and fully
          transitioned to Computer Science. I build full stack
          and front end solutions revolving around users and
          the MO.</p>
          <div className="btn_list">
            <a className="text-capitalize btn btn-primary mr-3" href="/FernandoBoza_Resume.pdf" download="FernandoBoza-Resume">
              <i className="mr-2 fas fa-download" /> Download Resume
              </a>
            <Link href='/FernandoBoza_Resume.pdf'>
              <a className="text-capitalize btn btn-success"><i className="mr-2 far fa-window" /> View Web Resume</a>
            </Link>
          </div>
        </div>
        <div className="col col-sm-6 col-md-6 col-lg-4">
          <Link href="/blog">
            <a className='category-title-link'>
              <h1 className=''>Blog.<i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={BLOGS_ARTICLES_QUERY}>
            {({ data }) => {
              data = data.blogArticles.slice(0, 4);
              return (
                data.map(blog => {
                  return (
                    <Card key={blog.slug} article={blog} />
                  )
                })
              );
            }}
          </Query>
        </div>
        <div className="col col-sm-6 col-md-6 col-lg-4">
          <Link href="/portfolio">
            <a className='category-title-link'>
              <h1 className=''>Portfolio. <i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={PORTFOLIOS_ARTICLES_QUERY}>
            {({ data }) => {
              data = data.portfolioArticles.slice(0, 4);
              return (
                data.map(portfolio => {
                  return (
                    <Card key={portfolio.slug} article={portfolio} />
                  )
                })
              );
            }}
          </Query>
        </div>
      </div>
    </section>
  )
}

export default Home;

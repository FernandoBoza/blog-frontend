import Head from 'next/head'
import Link from "next/link";
import Query from "../components/Query.component"
import Card from "../components/Card.component"
import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery';

const Home = () => {
  const dual_col = "col col-sm-6 col-md-6 col-lg-4";
  const handleScroll = () => {
    console.log('clicked')
  }
  return (
    <section className='Home container'>
      <Head>
        <title>Fernando Boza | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row hero">
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 text-center">
          <h1 className='m-0'>Hi there, i'm 👋</h1>
          <h1 className="title my-4">
            <span className='font-weight-light '>Fernando</span>
            <span className=''>Boza</span>
          </h1>
          <p className=''>Software developer by trade, I started while working in Paris I fell
          in love with the art and dynamics of coding and fully
          transitioned to Computer Science. I build full stack
          and front end solutions revolving around users and
          the mission objective.</p>
          <Link href='#title'>
            <div className="hero-scroll-down-notifer mt-5">
              <div className="scroll-down-wrap ">
                <div className="mousey" onClick={handleScroll}>
                  <div className="scroller" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row" id='title'>
        <div className={dual_col}>
          <Link href="/blog">
            <a className='category-title-link'>
              <h1 className=' '>Blog.<i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={ARTICLE_QUERY('blog')}>
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
        <div className={dual_col}>
          <Link href="/portfolio">
            <a className='category-title-link'>
              <h1 className=' '>Portfolio. <i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={ARTICLE_QUERY('portfolio')}>
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
    </section >
  )
}

export default Home;

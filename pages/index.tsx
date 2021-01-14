import Head from 'next/head'
import Query from "../components/Query.component"
import Hero from "../components/Hero.component"
import BlogCard from "../components/BlogCard.component";
import PortfolioCard from "../components/PortfolioCard.component";
import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery';
import { progressObject as pg, homeObject, servicesObj, clientIcons } from '../utils/CONSTANT'
import Fade from 'react-reveal/Fade';
import jump from 'jump.js';
import { Portfolio, Blog } from '../interfaces/Interfaces.interface';

const Home = () => {
  const dual_col = "col col-sm-6 col-md-6 col-lg-6 col-xl-4";

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      jump('#services-section', {
        offset: -90,
      })
    }
  }

  return (
    <section className='Home container'>
      <style jsx>{`
        section.Home .category-title-link i.fas.fa-external-link-square-alt {
          font-size: 1rem;
          position: absolute;
        }

        section.Home h1.title .font-weight-light {
          letter-spacing: 0;
        }

        .bg-pink {
          background-color: #FF19AF;
        }

        .text-pink {
          color: #FF19AF;
        }

        .bg-purblue {
          background-color: #1304CB;
        }

        .progress {
          height: 1.5rem;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 2px;
        }

        .progress-bar {
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          text-align: left;
          padding-left: 1rem;
        }

        .progress-container {
          margin-bottom: 2rem;
        }

        .progress-title {
          font-weight: 500;
          font-size: 1.3rem;
		      text-transform: capitalize;
        }

        .progress-container i {
          font-size: 1.4rem;
        }

        .client-icon-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem;
        }
        
        .display-content{
          width: 67%;
        }

        .home-footer {
          height: 60vh;
          align-items: center;
        }

        .home-footer h1 {
          width: 20rem;
        }
        
`}</style>
      <Head>
        <title>Fernando Boza | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero handleScroll={handleScroll} />

      <div id="services-section" className='my-5'>
        <h1 className="title text-center"> <Fade bottom cascade>What I Do</Fade></h1>
        <div className="row ">
          {servicesObj.map(service => <ServiceCol key={service.title} data={service} />)}
        </div>
      </div>


      <div className="portfolio-section my-5">
        <h1 className="title text-center">MY PORTFOLIO</h1>
        <p className="display-content text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim suscipit ratione quia ea inventore incidunt veniam excepturi odit neque dolorem, beatae quidem vitae soluta, odio atque facere assumenda ullam.</p>
        <div className="card-deck">
          <Query slug query={ARTICLE_QUERY('portfolio')}>
            {({ data }) => {
              return (
                data.portfolioArticles.slice(0, 3).map((portfolio: Portfolio) => {
                  const img = portfolio.articleBase.image[1] ? portfolio.articleBase.image[1].url : 'http://via.placeholder.com/337x200';
                  return (
                    <PortfolioCard article={portfolio} key={portfolio.slug} />
                  )
                })
              );
            }}
          </Query>
        </div>
      </div>

      <div className="blog-section my-5">
        <h1 className="title">WHAT'S NEW</h1>
        <p className="display-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim suscipit ratione quia ea inventore incidunt veniam excepturi odit neque dolorem, beatae quidem vitae soluta, odio atque facere assumenda ullam.</p>
        <div className="card-deck">
          <Query slug query={ARTICLE_QUERY('blog')}>
            {({ data }) => {
              return (
                data.blogArticles.slice(0, 3).map((blog: Blog) => {
                  return (
                    <BlogCard article={blog} key={blog.slug} />
                  )
                })
              );
            }}
          </Query>
        </div>
      </div>

      <div className="home-footer d-flex justify-content-between">
        <h1 className="title">HAPPY CLIENTS</h1>
        <div className="client-icon-container">
          {clientIcons.map(client => <ClientIcon key={client.name} client={client} />)}
        </div>
      </div>
    </section >
  )
}

export default Home;

function ClientIcon({ client }) {
  let Icon;
  if (!client.src) {
    Icon = <i style={{ fontSize: '3rem' }} className={`fab fa-${client.name}`}></i>
  } else {
    Icon = <img style={{ width: '60px', filter: 'grayscale(100%)' }} className='imgSize' src={client.src} alt={client.name} />
  }
  return (
    <div className='box'>
      <style jsx>{`
      .box {
        width: 150px;
        height: 150px;
        display: flex;
        border-radius: 15px;
        align-items: center;
        border: 1px solid;
        justify-content: center;
      }

      .box img {
        filter: blur(2px)
      }

      @media (prefers-color-scheme: dark) {
        .box {
          border-color: #e3e3e3
        }
      }
      
      @media (prefers-color-scheme: light) {
        .box {
          border-color: #999
        }
      }
      `}</style>
      {Icon}
    </div>
  );
}

function ServiceCol({ data }) {
  const { title, color, icon, content } = data;
  let arr = title.split(' ');
  let heavy = arr[0],
    light = arr[1];

  if (title.includes('UI')) {
    heavy = 'UI & UX';
    light = 'Design'
  }
  return (
    <Fade delay={900} duration={1000} bottom>
      <div className='service-col col-12 col-md-4'>
        <style jsx>{`
      h4 {
        // margin-bottom: 14rem;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 2.5rem;
        text-align: center;
      }

      img {
        width: 11rem;
        margin: 5rem auto;
      }

      .fas.fa-circle {
        font-size: 11rem;
        position: absolute;
        top: 34%;
        left: 31%;
        z-index: -1;
        text-shadow: 0 0 50px currentcolor;
      }
    
      .service-col {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 5px;
        transition: color .4s, background .4s, box-shadow .4s, transform .5s;
      }      
      
      .service-col:hover {
        transform: scale(1.1);
        z-index: 3;
      }

      @media (max-width: 766px) {
        img {
          left: 35%;
          top: 23%;
        }
      }

      @media (prefers-color-scheme: dark) {
        .service-col:hover  * {
          color: white;
        }

        .service-col:hover {
          background: rgb(78,78,78);
          box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        }
      }
      
      @media (prefers-color-scheme: light) {
        .service-col:hover  * {
          color: #444;
        }

        .service-col:hover {
          background: rgb(231, 231, 231);
          box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        }
      }
      `}</style>
        <i className="fas fa-circle" style={{ color: color }}></i>
        <h4 className='d-flex flex-column'>{heavy}
          <span className='font-weight-light'> {light}</span>
        </h4>
        <img src={`../static/imgs/icon-${icon}.svg`} alt={title} />
        <p className=''>{content}</p>
      </div>
    </Fade>
  )
}
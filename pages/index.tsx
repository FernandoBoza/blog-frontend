import Head from 'next/head'
import Link from "next/link";
import Query from "../components/Query.component"
import Card from "../components/Card.component"
import Hero from "../components/Hero.component"
import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery';
import { progressObject as pg, homeObject, servicesObj } from '../utils/CONSTANT'
import Fade from 'react-reveal/Fade';
import jump from 'jump.js';

interface Blog extends Article { }

interface Portfolio extends Article { }


interface Article {
  title: string,
  slug: string
}

const Home = () => {
  const dual_col = "col col-sm-6 col-md-6 col-lg-6 col-xl-4";

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      jump('#skills', {
        offset: -90,
      })
    }
  }


  const handleFillProgress = (target: number): string => {
    return `${target}%`;
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

        // section.Home h1.title {
        //   letter-spacing: 4px;
        // }

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
`}</style>
      <Head>
        <title>Fernando Boza | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero handleScroll={handleScroll} />

      {/* <div className="row" id="skills">
        <div className="col-12 offset-0 offset-lg-0 col-lg-5 mb-5">
          <h1 className="title"> <Fade bottom cascade>What I Do</Fade></h1>
          <Fade top cascade delay={900}>
            <div><p>{homeObject.services}</p></div>
            <div className="btn_list d-flex">
              <a className="text-capitalize btn btn-outline-primary mr-3" target="_blank" href="/FernandoBoza_Resume.pdf" download="FernandoBoza-Resume">
                <i className="mr-2 fas fa-download" /> Download Resume
              </a>
              <div>
                <Link href='/FernandoBoza_Resume.pdf'>
                  <a target='_blank' className="text-capitalize btn btn-outline-success "><i className="mr-2 far fa-window" /> View Resume</a>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 offset-lg-1 col-lg-5">
          <Fade duration={1300} delay={900} right cascade>
            {pg.map(data => {
              return (
                <div key={data.text} className="progress-container">
                  <h1 className={`d-flex justify-content-between progress-title ${data.h1Class}`}>{data.text} <i className={`fal ${data.icon}`}></i></h1>
                  <div className="progress">
                    <div className={`progress-bar ${data.prgsbarColor}`} role="progressbar" style={{ width: handleFillProgress(data.width) }}>{data.width}%</div>
                  </div>
                </div>
              )
            })}
          </Fade>
        </div>
      </div>
       */}
      <div id="services">
        <h1 className="title"> <Fade bottom cascade>What I Do</Fade></h1>
        <div className="row">
          {servicesObj.map((service, index) => <ServiceCol key={service.title} first={index == 0} data={service} />)}
        </div>
      </div>
      <div className="row" id='title'>
        <div className={dual_col}>
          <Link href="/blog">
            <a className='category-title-link'>
              <h1 className=' '> <Fade bottom cascade>Blog.</Fade><i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={ARTICLE_QUERY('blog')}>
            {({ data }) => {
              return (
                data.blogArticles.slice(0, 4).map((blog: Blog) => {
                  return (
                    <Fade delay={800} key={blog.slug} left>
                      <Card article={blog} />
                    </Fade>
                  )
                })
              );
            }}
          </Query>
        </div>
        <div className={dual_col}>
          <Link href="/portfolio">
            <a className='category-title-link'>
              <h1 className=' '> <Fade bottom cascade>Portfolio.</Fade> <i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={ARTICLE_QUERY('portfolio')}>
            {({ data }) => {
              return (
                data.portfolioArticles.slice(0, 4).map((portfolio: Portfolio) => {
                  return (
                    <Fade delay={800} key={portfolio.slug} right>
                      <Card article={portfolio} />
                    </Fade>
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


function ServiceCol({ first, data }) {
  const { title, color, icon, content } = data;
  let validateCol = first ? 'service-col col col-lg-3' : 'service-col col col-lg-3 offset-lg-1';
  return (
    <Fade delay={900} duration={1000} bottom>
      <div className={validateCol}>
        <style jsx>{`
      h4 {
        margin-bottom: 14rem;
        font-weight: bold;
      }

      img {
        width: 10rem;
        position: absolute;
        left: 22%;
        top: 20%;
      }

      .fas.fa-circle {
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 7rem;
        top: 8rem;
      }
    
      .service-col {
        position: relative;
        padding: 1rem;
        border-radius: 5px;
        transition: color .4s, background .4s, box-shadow .4s, transform .5s;
      }      
      
      .service-col:hover {
        transform: scale(1.1);
        z-index: 3;
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
        <h4>{title}</h4>
        <img src={`../static/imgs/icon-${icon}.svg`} alt={title} />
        <p>{content}</p>
      </div>
    </Fade>
  )
}
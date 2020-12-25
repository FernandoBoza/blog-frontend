import Head from 'next/head'
import Link from "next/link";
import Query from "../components/Query.component"
import Card from "../components/Card.component"
import ARTICLE_QUERY from '../apollo/queries/allArticlesQuery';
import { progressObject as pg, homeObject } from '../utils/CONSTANT'
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
        }

        .progress-container i {
          font-size: 1.4rem;
        }

        .mousey {
          width: 20px;
          height: 30px;
          border-radius: 6px;
          padding: 0 6px;
          border: 1px solid;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          margin: 0 auto;
        }
        .scroller {
          position: relative;
          left: 50%;
          top: 6px;
          margin-left: -2px;
          width: 4px;
          height: 4px;
          border-radius: 4px;
          animation-name: scroll;
          animation-duration: 2.2s;
          animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
          animation-iteration-count: infinite;
        }
        @keyframes scroll {
          0% {
              opacity: 0;
          }
          10% {
              transform: translateY(0);
              opacity: 1;
          }
          100% {
              transform: translateY(50px);
              opacity: 0;
          }
        }

`}</style>
      <Head>
        <title>Fernando Boza | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row hero">
        <Fade top cascade>
          <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 text-center">
            <h1 className='m-0'>Hi there, i'm 👋</h1>
            <h1 className="title my-4">
              <span className='font-weight-light '>Fernando</span>
              <span className=''>Boza</span>
            </h1>
            <p className=''>{homeObject.intro}</p>
            <div className="mt-5">
              <div onClick={handleScroll} className="mousey">
                <div className="scroller" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="row" id="skills">
        <div className="col-12 offset-0 offset-lg-0 col-lg-5 mb-5">
          <Fade left>
            <h1 className="title">What I Do</h1>
            <p>{homeObject.services}</p>
            <div className="btn_list">
              <a className="text-capitalize btn btn-outline-primary mr-3" target="_blank" href="/FernandoBoza_Resume.pdf" download="FernandoBoza-Resume">
                <i className="mr-2 fas fa-download" /> Download Resume
              </a>
              <Link href='/FernandoBoza_Resume.pdf'>
                <a className="text-capitalize btn btn-outline-success "><i className="mr-2 far fa-window" /> View Resume</a>
              </Link>
            </div>
          </Fade>
        </div>
        <div className="col-12 offset-lg-1 col-lg-5">
          <Fade duration={1300} right cascade>
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
      <div className="row" id='title'>
        <div className={dual_col}>
          <Link href="/blog">
            <a className='category-title-link'>
              <h1 className=' '>Blog.<i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={ARTICLE_QUERY('blog')}>
            {({ data }) => {
              return (
                data.blogArticles.slice(0, 4).map((blog: Blog) => {
                  return (
                    <Fade key={blog.slug} left>
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
              <h1 className=' '>Portfolio. <i className="fas fa-external-link-square-alt" /></h1>
            </a>
          </Link>
          <Query slug query={ARTICLE_QUERY('portfolio')}>
            {({ data }) => {
              return (
                data.portfolioArticles.slice(0, 4).map((portfolio: Portfolio) => {
                  return (
                    <Fade key={portfolio.slug} right>
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

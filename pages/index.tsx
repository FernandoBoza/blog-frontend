import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Query from "../components/Query.component"
import BLOG_ARTICLES_QUERY from '../apollo/queries/Blog.query'
import PORTFOLIO_ARTICLES_QUERY from '../apollo/queries/Portfolio.query'

export default function Home() {

  const publishDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Query id query={PORTFOLIO_ARTICLES_QUERY}>
            {({ data }) => {
              return (
                data.portfolioArticles.map(x => {
                  return (
                    <div key={x.slug} className={styles.card}>
                      <h3>{x.title}</h3>
                      <p>{x.articleBase.content}</p>
                      <span>{publishDate(x.published_at)}</span>
                      {/* <img src={x.articleBase.image != null ? x.articleBase.image.url : ''} alt="" /> */}
                    </div>
                  )
                })
              );
            }}
          </Query>
          <Query id query={BLOG_ARTICLES_QUERY}>
            {({ data }) => {
              return (
                data.blogArticles.map(x => {
                  return (
                    <div key={x.slug} className={styles.card}>
                      <h3>{x.title}</h3>
                      <p>{x.articleBase.content}</p>
                      <span>{publishDate(x.published_at)}</span>
                      {/* <img src={x.articleBase.image != null ? x.articleBase.image.url : ''} alt="" /> */}
                    </div>
                  )
                })
              );
            }}
          </Query>
        </div>
      </main>
    </div>
  )
}

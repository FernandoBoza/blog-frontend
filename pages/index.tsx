import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Query from "../components/Query.component"
import BLOG_ARTICLES_QUERY from '../apollo/queries/blogArticleQuery'
import PORTFOLIO_ARTICLES_QUERY from '../apollo/queries/portfolioArticleQuery'

export default function Home() {
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

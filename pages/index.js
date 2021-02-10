import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org" target="_blank">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" target="_blank" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" target="_blank" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples" target="_blank"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>

          <div className={styles.card}>
          <a
            href="https://www.google.com/search?q=next+js+contact+form&rlz=1C1CHBD_daDK922DK922&oq=nextjs+contact+&aqs=chrome.1.69i57j0i13j0i8i13i30.4017j1j7&sourceid=chrome&ie=UTF-8" target="_blank"
          ><h3>Contact form &rarr;</h3></a>
          </div>
      </main>

      <Footer />
    </div>
  )
}

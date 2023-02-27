import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/pages/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gevorg Harutyunyan: Front-End Tech Lead</title>
        <meta name="description" content="
          Gevorg Harutyunyan's blog. Writing about Front-End, Architecture, Component-Driven-Development,
          Front-End tooling, Front-End best practices, TypeScript, JavaScript, Vue, React
        " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          Hello world

          <Link href="/blog/first-post">
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
      </main>
    </>
  )
}

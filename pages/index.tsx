import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Head>
        <meta property="og:site_name" content="Purdue Hackers" />
        <meta property="og:name" content="Purdue Hackers" />
        <meta property="og:title" content="Purdue Hackers" />
        <meta
          property="og:image"
          content="https://og.purduehackers.com/Test.png?theme=light&md=1&fontSize=300px&caption="
        />
        <meta property="og:description" content="💛⚡️" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>Purdue Hackers</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home

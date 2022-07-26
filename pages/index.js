import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabio | Software Engineer</title>
        <meta name="description" content="Fabio | Software Engineer" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  )
}

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


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
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

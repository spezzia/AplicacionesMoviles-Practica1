import Head from 'next/head'
import Footer from '../components/footer.js'
import Info from '../components/info.js'
import SideNav from '../components/sidenav.js'
import TopNav from '../components/topnav.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pagina 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav></TopNav>
      <SideNav></SideNav>
      <Info nombre='Informacion 3'></Info>
      <Footer></Footer>
    </div>
  )
}

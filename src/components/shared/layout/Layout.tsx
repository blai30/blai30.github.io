import { NextPage } from 'next'
import Footer from '@/components/shared/layout/Footer'
import Header from '@/components/shared/layout/Header'
import ScrollTop from '@/components/shared/ScrollTop'
import Head from 'next/head'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main id="layout">
      <Head>
        <title>Brian Lai</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pt-24 md:pt-32 pb-24">
          <div className="mx-auto px-6">{children}</div>
        </div>
        <Footer />
      </div>

      <ScrollTop />
    </main>
  )
}

export const getLayout = (page: NextPage) => <Layout>{page}</Layout>

export default Layout

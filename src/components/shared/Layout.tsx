import { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, ScrollTop } from '@/components/shared'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main id="layout">
      <Head>
        <title>Brian Lai</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-grow pt-24 pb-24 md:pt-32">
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

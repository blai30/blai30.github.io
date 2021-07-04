import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: NextPage) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp

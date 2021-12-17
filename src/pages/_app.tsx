import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: NextPage) => page)
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp

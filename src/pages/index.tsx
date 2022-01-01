import { NextPage } from 'next'
import { getLayout } from '@/components/shared'
import { Contact, Hero, Portfolio, Skills } from '@/components'

const Home = () => {
  return (
    <div id="home" className="flex flex-col space-y-16">
      <section>
        <Hero />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  )
}

// Surround {page} with a sub-layout if desired.
Home.getLayout = (page: NextPage) => getLayout(page)

export default Home

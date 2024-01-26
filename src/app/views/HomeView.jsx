import { Header, LandingContent, Footer } from '../components'

import { barberInfo } from '../../data/data'

export const HomeView = () => {
  return (
    <div>
      <Header />
      <LandingContent barberInfo={barberInfo} />
      <Footer />
    </div>
  )
}

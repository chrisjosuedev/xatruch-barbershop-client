import { Header, LandingContent, Footer } from "../components";

import { barberInfo, reviews } from "../../data/data";

export const HomeView = () => {
  return (
    <div >
      <Header />
      <LandingContent
        barberInfo={barberInfo}
        reviews={reviews} />
      <Footer />
    </div>

  )
}

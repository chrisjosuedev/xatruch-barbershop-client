import { Header, LandingContent, Footer } from "../components";

import { barberInfo, barberServices, reviews } from "../../data/data";

export const HomeView = () => {
  return (
    <>
      <Header />
      <LandingContent 
        barberInfo={barberInfo}
        barberServices={barberServices}
        reviews={reviews} />
      <Footer />
    </>
  )
}

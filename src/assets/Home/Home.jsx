import React from 'react'
import Header from './Header'
import FeaturedProductSec from './FeaturedProductSec'
import PopularProductsSec from './PopularProductsSec'

const Home = () => {
  return (
    <>
      <Header/>
      <FeaturedProductSec/>
      <PopularProductsSec/>
    </>
  )
}

export default Home
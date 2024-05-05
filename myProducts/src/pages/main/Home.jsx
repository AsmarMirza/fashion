import React from 'react'
import HomeHero from '../../components/main/home/HomeHero'
import HomeMain from '../../components/main/home/HomeMain'
import HomeMiddle from '../../components/main/home/HomeMiddle'
import HomeEnd from '../../components/main/home/HomeEnd'
import HomeFooter from '../../components/main/home/homeFooter'

function Home() {
  return (
    <div>
    
      <HomeHero></HomeHero>
      <HomeMain></HomeMain>
      <HomeMiddle></HomeMiddle>
      <HomeEnd></HomeEnd>
      <HomeFooter></HomeFooter>
    </div>
  )
}

export default Home

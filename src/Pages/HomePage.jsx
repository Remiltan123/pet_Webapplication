import React from 'react'
import { Header } from '../Component/HeaderSection/Header'
import { PatCard } from '../Component/PatCard'
import { HeroFooter } from '../Component/HeroFooter'
import { Product } from '../Component/Product'
import { PetKnowlage } from '../Component/PetKnowlage'
import { Footer } from '../Component/Fotter'

import Herofoter from '../Assets/Footer1.png'

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <PatCard/>
      <HeroFooter image ={Herofoter}/>
      <Product/>
      <PetKnowlage/>
    </div>
  )
}

import React from 'react'
import { Header } from '../Component/HeaderSection/Header'
import { PatCard } from '../Component/PatCard'
import { HeroFooter } from '../Component/HeroFooter'
import { Product } from '../Component/Product'

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <PatCard/>
      <HeroFooter />
      <Product/>
    </div>
  )
}

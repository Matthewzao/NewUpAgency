import { Flex } from '@chakra-ui/react'
import AboutUs from '../components/AboutUs'
import GerandoResultados from '../components/Body'
import Grafico from '../components/Grafico'
import Header from '../components/Header'
import Investimento from '../components/Investimento'
import WeGoHigh from '../components/WeGoHigh'


export default function Home() {
  return (
    <>
      <Header />
      <GerandoResultados />
      <WeGoHigh />
      <Investimento />
      <Grafico />
      <AboutUs />

    </>
  )
}

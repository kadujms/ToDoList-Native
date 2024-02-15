import React from 'react'
import Header from '../components/header/header'
import Categorias from '../components/categorias/categorias'

//componente de Home para o usuario sem login
const Home = () => {
  return (
    <>
        <Header/>
        <Categorias/>
    </>
  )
}

export default Home
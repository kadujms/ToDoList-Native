import React from 'react'

import './homeLog.css'

import HeaderLog from '../components/headerLog/headerLog'
import CategoriasLog from '../components/categoriasLog/categoriasLog'
import BtnAdicionar from '../components/btnAdicionar/btnAdicionar'

//componente da Home quando está logado 
const HomeLog = () => {
  return (
    <>
        <HeaderLog/>
        <BtnAdicionar/>
        <CategoriasLog/>
    </>
  )
}

export default HomeLog
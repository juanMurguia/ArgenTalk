import React from 'react'
import ContainerTranslate from './ContainerTranslate'
import Header from './Header'
import Footer from './Footer'

const Container = () => {
  return (
    <div id="container" className=' bg-slate-900 h-dvh flex flex-col justify-center items-center '>
        <Header></Header>
        <ContainerTranslate>

        </ContainerTranslate>
        <Footer></Footer>
      
      
    </div>
  )
}

export default Container
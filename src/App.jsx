import { useState } from 'react'

import './App.css'
import { Button } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Homes from './components/Home'
import Footer from './components/Footer'
import './i18n/i18n'
function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="pt-[100px]">
          <Homes />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>

  )
}

export default App

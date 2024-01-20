import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Content from './assets/Components/Content'
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
import './App.css'

function App() {
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App

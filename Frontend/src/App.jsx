import React from 'react'
import IndexLayout from './components/layouts'
import './App.css'
import Footer from './components/layouts/Footer'
import Content from './components/Content'

const App = () => {

  const content = (
    <div>
      <Content />
      <Footer />
    </div>
  )


  return (
    <IndexLayout render={content} />
    
  )
}

export default App

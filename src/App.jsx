import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Viewer from './components/viewer/Viewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Viewer />

      <section className='cardsSec'>
        
      </section>

    </div>
  )
}

export default App

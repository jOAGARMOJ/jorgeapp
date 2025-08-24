import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CONTADOR</h1>
      <div className="card">
        <div className='contador' style={{ marginBottom: '16px', fontSize: '1.5rem' }}>
          Conteo actual: {count}
        </div>
        <button className='btn-aumentar'  onClick={() => setCount(count + 1)}>
          Aumentar
        </button>
        <button className='btn-disminuir' onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>
          Disminuir
        </button>
        <p>
          Contador de clicks
        </p>
      </div>
      
    </>
  )
}

export default App

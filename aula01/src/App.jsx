import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alternador from './components/alternador'

function App() {
  const [count, setCount] = useState(0)
  const [estado, setEstado] = useState(0)

  return (
    // tag raiz
    <div> 
        <button onClick={
          // expressão lambda
          () => setCount((count + 1))
          }>clique {count}</button>

          <Alternador setEstado={setEstado} estado={estado}/>
          <Alternador/>
          <Alternador/>
          <Alternador/>
    </div>
  )
}

export default App

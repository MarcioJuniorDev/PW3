import { useState } from 'react'
import './App.css'
import Alternador from './components/alternador'

function App() {
  const [count, setCount] = useState(0)
  const [estado0, setEstado0] = useState(false)
  const [estado1, setEstado1] = useState(false)
  const [estado2, setEstado2] = useState(false)
  const [estado3, setEstado3] = useState(false)

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
    </div>
  )
}

export default App

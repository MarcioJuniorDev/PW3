import { useEffect, useState } from 'react'
import './App.css'
import Alternador from './components/alternador'

function App() {
  const [count, setCount] = useState(0)
  const [estado0, setEstado0] = useState(false)
  const [estado1, setEstado1] = useState(false)
  const [estado2, setEstado2] = useState(false)
  const [estado3, setEstado3] = useState(false)
  const [nome, setNome] = useState('')
  const [erro, setErro] = useState(false)

  // "trigger" que monitora uma lista de estados delimitada por colchetes (2° parametro)
  useEffect(() => 
    { 
        if(nome.length < 5)
        {
          // mudar o estado de erro para true
          setErro(true)
        }
        else
        {
          // mudar o estado de erro para false
          setErro(false)
        }
     }, [nome])

  return (
    // tag raiz
    <div> 
        <button onClick={
          // expressão lambda
          () => setCount((count + 1))
          }>clique {count}</button>

          <Alternador setEstado={setEstado0} estado={estado0}/>
          <Alternador setEstado={setEstado1} estado={estado1}/>
          <Alternador setEstado={setEstado2} estado={estado2}/>
          <Alternador setEstado={setEstado3} estado={estado3}/>

          <p>Estado 0: {estado0 ? 'furunfante' : 'não furunfante'}</p>
          <p>Estado 1: {estado1 ? 'furunfante' : 'não furunfante'}</p>
          <p>Estado 2: {estado2 ? 'furunfante' : 'não furunfante'}</p>
          <p>Estado 3: {estado3 ? 'furunfante' : 'não furunfante'}</p>

          <label>Nome:</label>
          <div style={{color: erro ? 'red' : 'green'}}>
              { erro ? 'o nome deve contar pelo menos 5 caracteres' : 'nome valido' }
          </div>

          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
    </div>
  )
}

export default App

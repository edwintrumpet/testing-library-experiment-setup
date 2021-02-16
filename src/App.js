import { useState } from 'react'

import { rickFetch } from './services/rick'

function App() {
  const [loading, setLoading] = useState(false)
  const [personaje, setPersonaje] = useState(undefined)
  const [errors, setErrors] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try{
      const response = await rickFetch()
      setPersonaje({name: response.name})
    }catch(err){
      setErrors(true)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <button data-testid="get-rick" disabled={loading} onClick={handleClick}>Enviar</button>
      {personaje && <div>
        <p>{personaje.name}</p>
        </div>}
      {errors && <p>Hubo un error</p>}
      <button onClick={()=>console.log('enviando')}>Enviar</button>
    </div>
  );
}

export default App;

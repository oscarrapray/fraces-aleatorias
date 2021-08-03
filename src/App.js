import { useEffect, useState } from "react";
import Frace from "./components/Frace";
import axios from 'axios'

function App() {
  const [state,setState] = useState({})

  const consultarApi = async() =>{
    const resp = await axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    setState(resp.data[0])
  }

useEffect(() =>{
  consultarApi()
},[])

  return (
    <div className="container">
        <h1 className="title-frase">Fraces Breaking Bad</h1>
        <Frace 
        result = {state}
        />
        <button className="btn-frase" onClick={consultarApi}>Obtener Frase</button>
    </div>
  );
}

export default App;

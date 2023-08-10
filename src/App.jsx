import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponnet from "./components/ButtonComponent/ButtonComponent"
import BasicExample from "./components/NavBarComponents/NavBarComponent";
import { useState } from "react";

function App() {
  // se desestructura del Hook useState, el primer elemento es el valor del estado, el segundo es la funcion que permite modificar el estado
  // El primer valor, en este caso count, es el valor inicial del estado
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  console.log(count);

  return (
    <div>
      <BasicExample />
      {/*<ButtonComponnet label='Boton principal' bsButtonType='primary'/><br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi tempora nesciunt aperiam cum ipsum itaque repellat fugit consectetur. Dolore illum minima quam, in repellat excepturi commodi impedit quas omnis? <br/>
      <ButtonComponnet label='Boton Secundario' bsButtonType='secondary'/><br/>
      <ButtonComponnet label='Boton Terciario' bsButtonType='dark'/><br/> */}
      <div>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <ButtonComponnet label="Incrementar" bsButtonType="primary" onClickFunction={incrementar} />
        <ButtonComponnet label="Decrementar" bsButtonType="secondary" onClickFunction={decrementar} />
      </div>
    </div >
  )
}

export default App

import "./styles.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const multiplicar = () => {
    const resultadoMultiplicacion = num1 * num2;
    setResultado(`${resultadoMultiplicacion}`);
  };

  return (
    <div>
      <div className="titulo">PEDIDO DE ROPA </div>

      <p className="left">
        Nombre
        <input
          className="input"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese su Nombre"
        />
      </p>

      <p className="left">
        Email
        <input
          className="input"
          type="@"
          name="email"
          id="email"
          placeholder="Ingrese su Email"
        />
      </p>

      <div className="contenedor">
        <div className="txt">
          <h1>Articulo</h1>
          <h2>Camisa</h2>
        </div>
        <div className="txt">
          <h1>Valor Articulo</h1>
          <input
            type="number"
            id="num1"
            name="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <br />
        </div>
        <div className="txt">
          <h1>Cantidad</h1>
          <input
            type="number"
            id="num2"
            name="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br />
        </div>
        <div className="txt">
          <h1>Total Articulo</h1>
          <p className="total">{resultado}</p>
        </div>
      </div>

      <form>
        <button type="button" onClick={multiplicar}>
          total
        </button>
      </form>
    </div>
  );
}

export default App;

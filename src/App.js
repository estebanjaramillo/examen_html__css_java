import "./styles.css";
import React, { useState, useEffect } from "react";
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [resultado1, setResultado1] = useState("");
  const [resultado2, setResultado2] = useState("");
  const [resultado, setResultado] = useState("");

  const multiplicar = () => {
    const resultadoMultiplicacion = num1 * num2 + num3 * num4;
    setResultado(`${resultadoMultiplicacion}`);
  };

  const multiplicar1 = () => {
    const resultadoMultiplicacion1 = num1 * num2;
    setResultado1(`${resultadoMultiplicacion1}`);
  };

  const multiplicar2 = () => {
    const resultadoMultiplicacion2 = num3 * num4;
    setResultado2(`${resultadoMultiplicacion2}`);
  };

  useEffect(() => {
    setResultado(num1 * num2 + num3 * num4);
    setResultado1(num1 * num2);
    setResultado2(num3 * num4);
  }, [num1, num2, num3, num4]);

  const [pais, setPais] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudades, setCiudades] = useState([]);

  const paises = ["Estados_unidos", "Colombia"];
  const estados = {
    Estados_unidos: ["california", "florida"],
    Colombia: ["Antioquia", "Cundinamarca", "Valle del cauca", "Atlantico"]
  };
  const ciudadesPorEstado = {
    california: ["los angeles", "San Diego", "San Jose"],
    florida: ["Miami", "Boca Raton"],
    Antioquia: [
      "Medellín",
      "Bello",
      "Envigado",
      "Sabaneta",
      "Caldas",
      "La estrella",
      "Copacabana"
    ],
    Cundinamarca: ["Bogotá", "Soacha", "Machetá"],
    "Valle del cauca": [
      "Cali",
      "Alcalá",
      "Buenaventura",
      "Bugalagrande",
      "Ansermanuevo"
    ],
    Atlantico: ["Barranquilla", "Baranoa", "Campo de la Cruz", "Candelaria"]
  };

  const handlePaisSeleccionado = (event) => {
    setPais(event.target.value);
    setDepartamento("");
    setCiudades([]);
  };

  const handleDepartamentoSeleccionado = (event) => {
    setDepartamento(event.target.value);
    setCiudades(ciudadesPorEstado[event.target.value]);
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
          <h2>Jeans</h2>
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
          <input
            type="number"
            id="num1"
            name="num1"
            value={num3}
            onChange={(e) => setNum3(e.target.value)}
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
          <input
            type="number"
            id="num2"
            name="num2"
            value={num4}
            onChange={(e) => setNum4(e.target.value)}
          />
          <br />
        </div>
        <div className="txt">
          <h1>Total Articulo</h1>
          <p className="total">{resultado1}</p>
          <p className="total">{resultado2}</p>
          <br></br>
          <h1>Total valor</h1>
          <p className="total">{resultado}</p>
        </div>
      </div>
      <label htmlFor="pais">País:</label>
      <select id="pais" onChange={handlePaisSeleccionado}>
        <option value="">Seleccione un país</option>
        {paises.map((pais) => (
          <option key={pais} value={pais}>
            {pais}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="departamento">Departamento:</label>
      <select id="departamento" onChange={handleDepartamentoSeleccionado}>
        <option value="">Seleccione un departamento</option>
        {estados[pais]?.map((departamento) => (
          <option key={departamento} value={departamento}>
            {departamento}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="ciudad">Ciudad:</label>
      <select id="ciudad">
        <option value="">Seleccione una ciudad</option>
        {ciudades?.map((ciudad) => (
          <option key={ciudad} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

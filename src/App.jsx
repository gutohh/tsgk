import React from "react";
import Moldura from "./components/Moldura";

function App() {
  const container = {
    backgroundColor: "#082B24",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  const bemVindo = {
    fontSize: 30,
    fontWeight: "bolder",
    textAlign: "center",
    color: "#FFC144",
  }

  const playerName = {
    fontFamily: "DePixel",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    outline: "none",
    border: "none",
    backgroundColor: "rgba(255, 255, 255,0)",
  }

  return (
    <div style={container}>
      <Moldura dimensoes={[600, 260]} molduraCor="#8B2840" quadradoLado={150} quadradoCor="#E3446B" quadrantes={[2, 3]} >
        <div style={bemVindo}>
          <p>Bem-Vindo</p>
          <p>ao</p>
          <p>Trilha Sonora Geek</p>
        </div>
      </Moldura >

      <Moldura dimensoes={[600, 130]} molduraCor="#8B2840" quadradoLado={75} quadradoCor="#E3446B" quadrantes={[2, 3]}>
        <input style={playerName} type="text" />
      </Moldura>
    </div >
  )
}

export default App

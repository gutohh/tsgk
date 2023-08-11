import React from "react";

const Quadrado = ({ quadradoLado, quadradoCor }) => {
    return (
        <div style={{ width: quadradoLado, height: quadradoLado, backgroundColor: quadradoCor }}></div>
    )
}
export default Quadrado;
import React from "react";
import Quadrado from "./Quadrado"

const Camada = ({ quadradoLado, quadradoCor, zIndex, quadrante }) => {

    const camadaStyle = {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        zIndex: `${zIndex}`,
        justifyContent: `${quadrante == 1 || quadrante == 3 ? "flex-start" : "flex-end"}`,
        alignItems: `${quadrante == 1 || quadrante == 2 ? "flex-start" : "flex-end"}`,
    }
    return (
        <>
            <div style={camadaStyle}>
                <Quadrado quadradoLado={quadradoLado} quadradoCor={quadradoCor} />
            </div>
        </>
    )
}
export default Camada;
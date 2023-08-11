import React from "react";
import Camada from "./Camada";

const Moldura = ({ dimensoes, molduraCor, quadradoLado, quadradoCor, quadrantes, children }) => {
    const [quadranteCamada0, quadranteCamada1] = quadrantes;
    const [largura, altura] = dimensoes;
    const molduraStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: altura,
        width: largura,
    }
    const molduraConteudoStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        backgroundColor: `${molduraCor}`,
        height: 'calc(100% - 20px)',
        width: 'calc(100% - 20px)',
    }
    return (
        <>
            <div style={molduraStyle}>
                <Camada quadradoLado={quadradoLado} quadradoCor={quadradoCor} zIndex={0} quadrante={quadranteCamada0} />
                <Camada quadradoLado={quadradoLado} quadradoCor={quadradoCor} zIndex={1} quadrante={quadranteCamada1} />
                <div style={molduraConteudoStyle}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Moldura;
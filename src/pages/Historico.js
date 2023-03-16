import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"

const Historico = () => {

    return (
            <>
            <Header />
            <Tela>
                <div>Historico</div>
            </Tela>
            <Footer /> 
            </>
    )
}

export default Historico

const Tela = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 70px;
`;
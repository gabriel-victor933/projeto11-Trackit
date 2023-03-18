import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"


const Historico = () => {




    return (
            <>
            <Header />
            <Tela>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
    padding: 70px 0px;
    

    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        text-align: left;
        width: 90%;
        margin: 20px 0px;
    }

    p {
        width: 90%;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`;
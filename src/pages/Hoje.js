import { useContext } from "react"
import { AppContext } from "../Context"
import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"

const Hoje = () => {

    const { perfil } = useContext(AppContext)

    console.log(perfil)

    return (
        <Tela>
        <Header />
        <Footer />
        </Tela>
    )
}

export default Hoje


const Tela = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`;
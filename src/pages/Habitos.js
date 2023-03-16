import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"
import { URLhabits } from "../constant/images/urls"
import { useEffect, useContext, useState } from "react"
import { AppContext } from "../Context"
import axios from "axios"
import Habito from "./components/habito"
import Criar from "./components/Criar"


const Habitos = () => {

    const [habitos, sethabitos] = useState([])
    const [menu, setMenu] = useState(false)

    const {perfil} = useContext(AppContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${perfil.token}`
        }
    }

    useEffect(()=>{

        axios.get(URLhabits,config)
        .then((dados) => {
            sethabitos(dados.data)
        })
        .catch((erro) => console.log(erro))

    },[])

    console.log(habitos)

    return (
            <>            
            <Header />
            <Tela>
                <div className="title">
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setMenu(true)}><p>+</p></button>
                </div>

                {menu && <Criar />}

                <div className="lista">
                    {habitos.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : habitos.map((h)=> (<Habito />))}
                </div>
            </Tela>
            <Footer /> 
            </>

    )
}

export default Habitos

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

    .title {
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        
        h1 {
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }

        button {
            width: 40px;
            height: 35px;
            background-color: #52B6FF;
            border-radius: 4.63636px;
            border: none;
            color: white;
            font-size: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .lista {
        width: 90%;
        margin-top: 25px;
        
        p {
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;

            color: #666666;
        }
    }
`;
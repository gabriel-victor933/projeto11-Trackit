import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"
import { URLhabits } from "../constant/images/urls"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Context"
import dayjs from "dayjs"


const Hoje = () => {

    const [today, setToday] = useState(undefined)
    const [data, setData] = useState({dia: dayjs().locale("br").format('DD/MM'), week: dayjs().day()})

    const {config} = useContext(AppContext)

    useEffect(()=>{

        axios.get(`${URLhabits}/today`,config)
        .then((dados) => {
            setToday(dados.data)
        })
        .catch((erro) => console.log(erro))
    },[])

    function weekDay(i){
        switch(i){
            case 0: return "Domingo";
            case 1: return "Segunda";
            case 2: return "Terça";
            case 3: return "Quarta";
            case 4: return "Quinta";
            case 5: return "sexta";
            case 6: return "sabado";
            default: return "";

        }
    }

    return (
        <>
        <Header />
        <Tela>
            <h1>{weekDay(data.week)}, {data.dia}</h1>
        </Tela>
        <Footer />
        </>
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
`;
import Footer from "./components/Footer"
import Header from "./components/Header"
import Lista from "./components/lista";
import styled from "styled-components"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../Context";
import axios from "axios";
import { URLhistory } from "../constant/urls";


const Historico = () => {
    
    const [historico, setHistorico] = useState()
    const [dia, setDia] = useState()

    const { config, carregarUsuario } = useContext(AppContext)

    useEffect(()=>{

        carregarUsuario()

        axios.get(URLhistory,config)
        .then((dados)=> {
            setHistorico(dados.data)
        })
        .catch((erro)=>console.log(erro))
    },[])

    function modificarDia(date){
        
        if(historico == undefined) return "dia"

        const dia = dayjs(date).format('DD/MM/YYYY')

        const even = (e) => e.day == dia

        const checkDone = (e) => e.done == false

        const index = historico.findIndex(even)

        if(index != -1){


            if(historico[index].habits.some(checkDone)){
                return "dia undone"
            }

            return "dia done"
        }

    

        return "dia"

        
    }

    function handleClick(date){

        if(historico == undefined) return "dia"

        const dia = dayjs(date).format('DD/MM/YYYY')

        const even = (e) => e.day == dia

        const index = historico.findIndex(even)

        if(index != -1){
            
            setDia(historico[index].habits)
            return
        }

        setDia([])

    }

    console.log(dia)

    return (
            <>
            <Header />
            <Tela>
                <h1>Histórico</h1>
                <Calendar onClickDay={(date) => handleClick(date)} className="calendario" tileClassName={({ date}) => modificarDia(date)} />
                <Lista dia={dia} />
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

    .calendario {
        border-radius: 10px;
        border: none;
        height: 400px;
        
    }

    .dia {
        font-size: 15px;
        margin: 13px 0px;
        
    }

    .done {
        background-color: #8cc654;
        border-radius: 30px;
    }

    .undone {
        
        background-color: #ea5766;
        border-radius: 30px;
        color: black;
    }
`;
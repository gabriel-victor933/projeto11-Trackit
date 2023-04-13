import styled from "styled-components"
import { BsFillCheckSquareFill } from "react-icons/bs"
import axios from "axios"
import { URLhabits } from "../../constant/urls"
import { useContext } from "react"
import { AppContext } from "../../Context"
import { useEffect } from "react"
import { useState } from "react"


const HabitoHoje = ({habito}) => {


    const [instacia,setInstacia] = useState({...habito,render: false })
    
    const { config, setPorc, porc } = useContext(AppContext)

    useEffect(()=>{


        const body = {}

        if(!instacia.render) return

        if (instacia.done === true) {

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`, body, config)
                .then((dados) => {
                    
                })
                .catch((erro) => console.log(erro))
        } else if(instacia.done === false){
            axios.post(`${URLhabits}/${habito.id}/uncheck`, body, config)
                .then((dados) => {
                    
                })
                .catch((erro) => console.log(erro))
        } 
        


    },[instacia]) 

    function handleClick(){

        const  nova = {...instacia}
        const novaPorc = {...porc}

        if(nova.done){
            nova.done = false
            nova.currentSequence -= 1

            novaPorc.done -= 1;

            modifyrecord(nova, "sub")

        } else {
            nova.done = true
            nova.currentSequence += 1
            novaPorc.done += 1;

            modifyrecord(nova, "add")

        }

        if(!nova.render){
            nova.render = true

            
        }


        setInstacia(nova)
        setPorc(novaPorc)

    }

    function modifyrecord(nova,menu){

        if(menu === "add" && nova.currentSequence >= nova.highestSequence){
            nova.highestSequence = nova.currentSequence;
        }

        if(menu=== "sub" && nova.currentSequence + 1  === nova.highestSequence){
            nova.highestSequence -= 1
        }

    }

    

    return (
        <Card done={instacia.done} check={habito.currentSequence === instacia.highestSequence && instacia.currentSequence > 0} data-test="today-habit-container">
            <div>
                <h2 data-test="today-habit-name">{instacia.name}</h2>
                <p data-test="today-habit-sequence">Sequência atual: <span className="atual">{instacia.currentSequence} dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span className="check">{instacia.highestSequence} dias</span></p>
            </div>
            <BsFillCheckSquareFill data-test="today-habit-check-btn" color={instacia.done ? "#8FC549" : "#EBEBEB"} size="69px" onClick={handleClick} />
        </Card> 
    )
}

export default HabitoHoje

const Card = styled.div`
    width: 100%;
    background-color: white;
    width: 340px;
    height: 94px;
    margin-bottom: 10px;
    padding: 13px;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    p {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;

        .atual {
            color: ${props => props.done === true ? "#8FC549" : "#666666"}
        }

        .check {
            color: ${props => props.check === true ? "#8FC549" : "#666666"}
        }
    }
    }

`;
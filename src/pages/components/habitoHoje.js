import styled from "styled-components"
import { BsFillCheckSquareFill } from "react-icons/bs"
import axios from "axios"
import { URLhabits } from "../../constant/urls"
import { useContext } from "react"
import { AppContext } from "../../Context"


const HabitoHoje = ({habito, carregarHoje})=>{

    const {config} = useContext(AppContext)
    

    function checkHabit(){

        const body = {}

        if(habito.done === false){

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`, null, config)
            .then((dados) => {
                console.log(dados);
                carregarHoje();
            })
            .catch((erro) => console.log(erro))
        } else {

            axios.post(`${URLhabits}/${habito.id}/uncheck`, body, config)
            .then((dados) => {
                console.log(dados);
                carregarHoje();
            })
            .catch((erro) => console.log(erro))
        }

        
    }

    function checkAtual(){
        if(habito.currentSequence === habito.highestSequence && habito.currentSequence > 0){
            return true
        }

        return false
    }

    return (
        <Card done={habito.done} check={checkAtual} data-test="today-habit-container">
            <div>
                <h2 data-test="today-habit-name">{habito.name}</h2>
                <p data-test="today-habit-sequence">Sequência atual: <span className="atual">{habito.currentSequence} dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span className="check">{habito.highestSequence} dias</span></p>
            </div>
            <BsFillCheckSquareFill data-test="today-habit-check-btn" color={habito.done ? "#8FC549" : "#EBEBEB"} size="69px" onClick={checkHabit}/>
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
            color: ${props => props.done == true  ? "#8FC549": "#666666"}
        }

        .check {
            color: ${props => props.done == true  ? "#8FC549": "#666666"}
        }
    }
    }

`;
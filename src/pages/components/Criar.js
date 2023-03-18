import styled from "styled-components"
import {useState} from "react"
import { URLhabits } from "../../constant/urls"
import axios from "axios"

const Criar = ({config, setMenu, habito, setHabito, selecionados, setSelecionados, carregarHabitos}) => {

    const [disabled, setDisabled] = useState(false)
    const dias = ["D", "S","T","Q", "Q", "S","S"]

    

    function handleSelecionados(indexDia){
        let novo = [...selecionados]


        if(!novo.includes(indexDia) || novo.length == 0){
            novo.push(indexDia)
        } else {
            novo = novo.filter(i => i != indexDia)
        }

        setSelecionados(novo)
    }

    function criarHabito(){

        const info = {
            name: habito,
            days: selecionados// segunda, quarta e sexta
        }

        setDisabled(true)

        console.log(info)

        axios.post(URLhabits,info,config)
        .then((dados)=> {
            setMenu(false)
            setHabito("")
            setSelecionados([])
            carregarHabitos()
            setDisabled(false)

        })
        .catch((erro) => {
            setDisabled(false)
            alert(erro.response.data.message)
        })
    }

    return (
        <Container data-test="habit-create-container">
            <input data-test="habit-name-input" disabled={disabled} placeholder="Nome do Hábito" onChange={(e) => setHabito(e.target.value)} value={habito}/>
            <div className="dias">{dias.map((d,i)=> <Botao data-test="habit-day" disabled={disabled} selecionado={selecionados.includes(i)} key={i} onClick={() => handleSelecionados(i)}>{d}</Botao>)}</div>
            <div className="botoes"><button data-test="habit-create-cancel-btn" disabled={disabled} onClick={() => setMenu(false)}>Cancelar</button><button data-test="habit-create-save-btn" disabled={disabled} onClick={criarHabito}>Salvar</button></div>

        </Container>
    )
}

export default Criar

const Container = styled.div`
    width: 340px;
    height: 180px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;

    

    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        box-sizing: border-box; 
        padding-left: 10px;
        margin: 5px 0px;

        ::placeholder{
                color: #DBDBDB;
            }

        :disabled{
                background: #F2F2F2;
            }
    }


    .botoes {
        align-self: flex-end;
        margin-top: 30px;


        

    
        button {
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            width: 84px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
            color: white;
            border: none;
            margin-left: 15px;

            :disabled {
                opacity: 0.7;
            }

            
        }

        button:first-child {
            color: #52B6FF;
            background-color: white;
        }
    }

`;

const Botao = styled.button`
            width: 30px;
            height: 30px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-right: 4px;
            color: ${props => props.selecionado ? "#ffffff" : "#DBDBDB"};
            background-color: ${props => props.selecionado ? "#DBDBDB" : "#ffffff"};
`;

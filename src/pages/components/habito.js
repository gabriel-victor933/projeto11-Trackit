import styled from "styled-components"
import { BsTrash } from "react-icons/bs";
import { URLhabits } from "../../constant/images/urls";
import axios from "axios";

const Habito = ({habito, config, carregarHabitos}) => {

    const {id, name, days} = habito

    const dias = ["D", "S","T","Q", "Q", "S","S"]

    function removerHabito(){
        
        if(!window.confirm(`remover o Habito ${name}`)) return 0

        axios.delete(`${URLhabits}/${id}`,config)
        .then((dados)=> {
            carregarHabitos()
        })
        .catch((erro)=> {
            alert(`Não foi possivel excluir o habito ${erro.response.data.message}`)
        })
        
    }

    return (
        <Card>
            <h1>{name}</h1>
            <div>{dias.map((d,i)=> <Botao selecionado={days.includes(i+1)} key={i}>{d}</Botao>)}</div>
            <div className="icone"><BsTrash onClick={removerHabito}/></div>
        </Card>
    )

}

export default Habito

const Card = styled.div`
    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 15px;
    position: relative;

    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 4px;
    }

    .icone {
        position: absolute;
        top: 10px;
        right: 10px;
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
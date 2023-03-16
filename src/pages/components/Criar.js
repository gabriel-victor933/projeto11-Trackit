import styled from "styled-components"

const Criar = () => {

    const dias = ["D", "S","T","Q", "Q", "S","S"]

    return (
        <Container>
            <input placeholder="Nome do Hábito"/>
            <div className="dias">{dias.map((d,i)=> <button key={i}>{d}</button>)}</div>
            <div className="botoes"><button>Cancelar</button><button>Salvar</button></div>

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
    }

    .dias {
        
        

        button {
            width: 30px;
            height: 30px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            background-color: #ffffff;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-right: 4px;
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

            
        }

        button:first-child {
            color: #52B6FF;
            background-color: white;
        }
    }

`;
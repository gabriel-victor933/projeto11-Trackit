import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"
import { useContext, useEffect } from "react"
import { AppContext } from "../Context"
import dayjs from "dayjs"
import HabitoHoje from "./components/habitoHoje"
import Porcetagem from "./components/Porcetagem"


const Hoje = () => {
    
    const data = {dia: dayjs().locale("br").format('DD/MM'), week: dayjs().day()}

    const {today, carregarHoje} = useContext(AppContext)


    useEffect(()=>{
        carregarHoje()
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
            <h1 data-test="today">{weekDay(data.week)}, {data.dia}</h1>
            <Porcetagem/>
            <div className="lista">
                {today.map((h,i) => (<HabitoHoje key={h.id} habito={h}/>))}
            </div>
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
        margin-top: 20px;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        text-align: left;
        width: 90%;
    }

    .lista {
        width: 90%;
        margin-top: 25px;
    }

    .nenhum {
        color: #BABABA;
    }

    .porc {
        color: #8FC549;

    }
`;



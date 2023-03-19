import styled from "styled-components"
import dayjs from "dayjs"

const Lista = ({dia}) =>{

    if(dia == undefined) return
    
    if(dia.length == 0 ){
        return (
            <div></div>
        )
    }

    const diaFormat = dayjs(dia[0].date).format('DD/MM/YYYY')

    console.log(diaFormat)

    return (
        <Block>
            <h1>{diaFormat}</h1>
            {dia.map((d) => (<Texto key={d.id} feito={d.done}>O habito <span>{d.name}</span> {d.done ? "foi feito" : "não foi feito"}</Texto>))}
        </Block>
    )
}
export default Lista

const Block = styled.div`

    width: 90%;
    margin: 20px 0px;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;


    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        text-align: center;
        width: 90%;
        margin: 20px 0px;
    }
`;

const Texto = styled.div`

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: left;
        margin: 9px 0px;
        color: ${props => props.feito == true ? "#ea5766" : "#8cc654"};

        span{
            text-decoration: underline;
            font-size: 22px;
        }

`;


import styled from "styled-components"
import {Link} from "react-router-dom"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { AppContext } from "../../Context";

const Footer = () => {

    const {porc} = useContext(AppContext)
    

    return (
        <Menu data-test="menu">
            <Link data-test="habit-link" to="/habitos">Hábitos</Link>
            <Link data-test="today-link" to="/hoje" className="progress-bar">
                <CircularProgressbar
                    value={porc.total === 0 ? 100 : (porc.done/porc.total)*100}
                    text={"hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "18px",
                    textColor: "#fff"
                    })}
                ></CircularProgressbar>
            </Link>
            
            <Link data-test="history-link" to="/historico">Histórico</Link>
        </Menu>
    )
}

export default Footer

const Menu = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: #52B6FF;
    }

    .progress-bar {
        width: 91px;
        height: 91px;
        color: white;
        margin-bottom: 45px;
    }
`;

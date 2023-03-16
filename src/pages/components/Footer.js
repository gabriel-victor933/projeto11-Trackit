import styled from "styled-components"
import {Link} from "react-router-dom"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Footer = () => {

    return (
        <Menu>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje" className="progress-bar">
                <CircularProgressbar
                    value={50}
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
            
            <Link to="/historico">Histórico</Link>
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

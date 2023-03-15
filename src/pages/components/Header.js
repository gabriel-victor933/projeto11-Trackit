import { useContext } from "react"
import { AppContext } from "../../Context"
import styled from "styled-components"

const Header = () => {

    const {perfil} = useContext(AppContext)

    return (
        <Block>
            <p>TrackIt</p>
            <img src={perfil.image}/>
        </Block>
    )
}

export default Header

const Block = styled.header`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 18px;
    position: fixed;
    top: 0px;
    left: 0px;

    p {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;

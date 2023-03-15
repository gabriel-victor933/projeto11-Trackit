import { useContext } from "react"
import { AppContext } from "../../Context"
import styled from "styled-components"

const Header = () => {

    const {perfil} = useContext(AppContext)

    return (
        <Block>
            
        </Block>
    )
}

export default Header

const Block = styled.header`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

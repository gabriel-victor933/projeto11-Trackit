import styled from "styled-components"
import logo from "../constant/images/logo.jpg"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { URLlogin} from "../constant/urls"
import axios from "axios"
import {ThreeDots} from "react-loader-spinner"
import { useContext } from "react"
import { AppContext } from "../Context"

const PaginaInicial = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled,setDisabled] = useState(false)

    const navigate = useNavigate()

    const { setPerfil, carregarUsuario } = useContext(AppContext)


    useEffect(()=>{
        if(carregarUsuario()){
            navigate("/hoje")
        }
    },[])
    
  


    function handleSubmit(e){
        e.preventDefault()

        const info = {email, password}

        setDisabled(true)

        axios.post(URLlogin,info)
        .then((res)=> {
            console.log(res.data)
            console.log({image: res.data.image, token: res.data.token})
            setPerfil({image: res.data.image, token: res.data.token})
            navigate("/hoje")
            const usuario = JSON.stringify({image: res.data.image, token: res.data.token});

            localStorage.setItem("usuario", usuario);

        })
        .catch((err) => {
            setDisabled(false)
            alert(err.message)

        })
    }   

    return (
        <Tela>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input data-test="email-input" type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} value={email} disabled={disabled}/>
                <input data-test="password-input" type="password" placeholder="senha" required onChange={(e) => setPassword(e.target.value)} value={password} disabled={disabled}/> 
                <button data-test="login-btn" type="submit" disabled={disabled}>{
                    disabled == false ? "Entrar" : <ThreeDots height="50" width="50" radius="9" color="#ffffff" ariaLabel="three-dots-loading" wrapperStyle={{}}wrapperClassName="" visible={true}/>
            }</button>
            </form>

            <Link data-test="signup-link" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>


        </Tela>
    )

}

export default PaginaInicial

const Tela = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 180px;
        height: 178.38px;
        margin: 70px 0px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;

        input {
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            width: 303px;
            height: 45px;
            margin: 3px 0px;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #000000;
            padding: 3px;

            ::placeholder{
                color: #DBDBDB;
            }

            :disabled{
                background: #F2F2F2;
            }
        }

        button {
            width: 303px;
            height: 45px;
            background-color: #52B6FF;
            border-radius: 4.6px;
            margin: 3px 0px;
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            border: none;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;

            :disabled {
                opacity: 0.7;
            }
        }
    }

    a {
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin: 15px 0px;
    }
`;
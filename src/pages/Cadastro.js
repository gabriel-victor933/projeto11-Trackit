import styled from "styled-components"
import logo from "../constant/images/logo.jpg"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import { URLsignup } from "../constant/images/urls"
import axios from "axios"
import {ThreeDots} from "react-loader-spinner"


const Cadastro = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [disabled,setDisabled] = useState(false)

    const navigate = useNavigate()

    function handleSubmit(e){

        e.preventDefault()

        setDisabled(true)

        const infos = {email, name, image, password}

        axios.post(URLsignup,infos)
        .then((data)=> {
            console.log(data)
            navigate("/")
        })
        .catch((erro)=>{
            console.log(erro)
            setDisabled(false)
            alert(erro.message)
        })


    }

    return (
        <Tela>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} value={email} disabled={disabled}/>
            <input type="password" placeholder="senha" required onChange={(e) => setPassword(e.target.value)} value={password} disabled={disabled}/> 
            <input type="text" placeholder="nome" required onChange={(e) => setName(e.target.value)} value={name} disabled={disabled}/> 
            <input type="url" placeholder="foto" required onChange={(e) => setImage(e.target.value)} value={image} disabled={disabled}/> 

            <button type="submit" disabled={disabled}>{
                disabled == false ? "Cadastrar" : <ThreeDots height="50" width="50" radius="9" color="#ffffff" ariaLabel="three-dots-loading" wrapperStyle={{}}wrapperClassName="" visible={true}/>
        }</button>
        </form>

        <Link to="/">Já tem uma conta? Faça login!</Link>



    </Tela>
    )
}

export default Cadastro

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
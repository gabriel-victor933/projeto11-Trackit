import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { URLhabits } from "./constant/urls"


const AppContext = createContext({})

const AppProvider = ({children}) => {

    const [perfil, setPerfil] = useState({})
    const [today, setToday] = useState([])
    const [porc,setPorc] = useState(0)

    const config = {
        headers: {
            "Authorization": `Bearer ${perfil.token}`
        }
    }

    function carregarHoje(){
        
        axios.get(`${URLhabits}/today`,config)
        .then((dados) => {
            setToday(dados.data)
            calcularConcluidos(dados.data)
        })
        .catch((erro) => {
            console.log(erro)
            
        })

    }

    function calcularConcluidos(dados){

        
        let cont = 0;
        for(let i = 0; i < dados.length; i++){
            if(dados[i].done){
                cont++;
                
            }
        }

        setPorc(Math.round((cont/dados.length)*100))
    }

    function carregarUsuario(){
        const infoUsuario = localStorage.getItem("usuario");

        if(infoUsuario){
          const Usuario = JSON.parse(infoUsuario)
          setPerfil(Usuario)

          config.headers.Authorization = `Bearer ${Usuario.token}`;

          return true
        }

        return false
    }



    return (
        <AppContext.Provider value={{perfil, setPerfil, config, today, setToday, carregarHoje, porc, carregarUsuario}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
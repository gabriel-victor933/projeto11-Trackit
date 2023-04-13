import { createContext,  useState } from "react";
import axios from "axios";
import { URLhabits } from "./constant/urls"
import { useEffect } from "react";
import { URLhistory } from "./constant/urls";



const AppContext = createContext({})

const AppProvider = ({children}) => {

    const [perfil, setPerfil] = useState({})
    const [today, setToday] = useState([])
    const [porc,setPorc] = useState({done:0,total:0})
    const [historico, setHistorico] = useState()
    const [habitos, sethabitos] = useState([])


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

        const novo = {done: cont,total:dados.length}
        setPorc(novo)
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

    function carregarHistorico(){

        axios.get(URLhistory, config)
            .then((dados) => {
                setHistorico(dados.data)
                
            })
            .catch((erro) => console.log(erro))

    }

    function carregarHabitos(){

        axios.get(URLhabits,config)
        .then((dados) => {
            sethabitos(dados.data)
            carregarHoje()
        })
        .catch((erro) => console.log(erro))
    }

    

    useEffect(()=>{

        carregarUsuario()
        carregarHoje()
        carregarHistorico()
        carregarHabitos()
        
    },[])

    return (
        <AppContext.Provider value={{calcularConcluidos, habitos, sethabitos,carregarHabitos, carregarHistorico, historico,perfil, setPerfil, config, today, setToday, carregarHoje, porc, carregarUsuario,setPorc}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
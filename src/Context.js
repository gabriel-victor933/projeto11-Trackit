import { createContext,  useState } from "react";
import axios from "axios";
import { URLhabits } from "./constant/urls"
import { useEffect } from "react";
import { URLhistory } from "./constant/urls";



const AppContext = createContext({})

const AppProvider = ({children}) => {

    const [perfil, setPerfil] = useState(false)
    const [today, setToday] = useState([])
    const [porc,setPorc] = useState({done:0,total:0})
    const [historico, setHistorico] = useState()
    const [habitos, sethabitos] = useState([])
    const [info, setInfo] = useState("")


/*     const info = {
        headers: {
            "Authorization": `Bearer ${perfil.token}`
        }
    } */

    function carregarHoje(){
        
        axios.get(`${URLhabits}/today`,info)
        .then((dados) => {
            console.log("conectado")
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

/*     function carregarUsuario(){
        const infoUsuario = localStorage.getItem("usuario");

        if(infoUsuario){
          const Usuario = JSON.parse(infoUsuario)
          setPerfil(Usuario)

          info.headers.Authorization = `Bearer ${Usuario.token}`;

          return true
        }

        return false
    } */

    function carregarHistorico(){

        axios.get(URLhistory, info)
            .then((dados) => {
                setHistorico(dados.data)
                
            })
            .catch((erro) => console.log(erro))

    }

    function carregarHabitos(){

        axios.get(URLhabits,info)
        .then((dados) => {
            sethabitos(dados.data)
            carregarHoje()
        })
        .catch((erro) => console.log(erro))
    }


    useEffect(()=>{
        const infoUsuario = JSON.parse(localStorage.getItem("usuario"));

        if(infoUsuario){
            setInfo({headers: { "Authorization": `Bearer ${infoUsuario.token}`}})
            setPerfil({image: infoUsuario.image, token: infoUsuario.token})
        }

    },[])

    

    useEffect(()=>{

        console.log(perfil)
        if(perfil){
            console.log("rodando")
            carregarHoje()
            carregarHistorico()
            carregarHabitos()
        }

        
    },[perfil])

    return (
        <AppContext.Provider value={{setInfo, calcularConcluidos, habitos, sethabitos,carregarHabitos, carregarHistorico, historico,perfil, setPerfil, info, today, setToday, carregarHoje, porc,setPorc}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
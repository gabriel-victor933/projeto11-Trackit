import { AppContext } from "../../Context"
import { useContext } from "react"


const Porcetagem = () => {

    const {porc} = useContext(AppContext)

    if(porc.done > 0){
        return (<p data-test="today-counter" className="porc">{porc.total === 0 ? 100 : Math.round((porc.done/porc.total)*100)}% dos hábitos concluídos</p>)
    } 
    
    return (<p data-test="today-counter" className="nenhum">Nenhum hábito concluído ainda</p>)
    
}

export default Porcetagem
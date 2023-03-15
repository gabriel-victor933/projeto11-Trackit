import { useContext } from "react"
import { AppContext } from "../Context"
import Header from "./components/Header"

const Hoje = () => {

    const { perfil } = useContext(AppContext)

    console.log(perfil)

    return (
        <Header />
    )
}

export default Hoje
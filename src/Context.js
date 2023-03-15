import { createContext, useState } from "react";

const AppContext = createContext({})

const AppProvider = ({children}) => {

    const [perfil, setPerfil] = useState({})


    return (
        <AppContext.Provider value={{perfil, setPerfil}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
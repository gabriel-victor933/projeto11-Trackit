import { createContext, useState } from "react";

const AppContext = createContext({})

const AppProvider = ({children}) => {

    const [perfil, setPerfil] = useState({
        "id": 8249,
        "name": "gabriel",
        "image": "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
        "email": "gabrielvictoralvessantana@gmail.com",
        "password": "01234567",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODI0OSwiaWF0IjoxNjc4OTAwNzI2fQ.3h365qG4QnPB0d0jWGQgZgRPYsFewF8lCgt1ovJy2xw"
    })

    const config = {
        headers: {
            "Authorization": `Bearer ${perfil.token}`
        }
    }


    return (
        <AppContext.Provider value={{perfil, setPerfil, config}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
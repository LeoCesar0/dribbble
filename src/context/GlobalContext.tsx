import { createContext, useContext, useState } from "react";

interface IGlobalState {
    auth?: IAuth
    setAuth: (auth: IAuth) => void
    removeAuth: () => void
}

export interface IAuth {
  access_token: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
  };
}

const GlobalContext = createContext<IGlobalState>({} as IGlobalState);


export const GlobalStateProvider: React.FC = ({children}) => {
    const [auth, setAuthState] = useState<IAuth | undefined>(()=>{
        const savedAuth = localStorage.getItem("@dribbble:auth") || undefined

        if(savedAuth){
            return JSON.parse(savedAuth)
        }

        return savedAuth
    })

    const setAuth = (data: IAuth) =>{
        localStorage.setItem("@dribbble:auth", JSON.stringify(data))

        setAuthState(data)
    }

    function removeAuth(){
        localStorage.removeItem("@dribbble:auth")

        setAuthState(undefined)
    }

    return (
        <GlobalContext.Provider value={{auth, setAuth, removeAuth}} >
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    return context
}
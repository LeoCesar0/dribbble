import { createContext, useContext, useState } from "react";

interface IGlobalState {
    auth?: IAuth
    setAuth: (auth: IAuth) => void
    removeAuth: () => void
}

interface IAuth {
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
    const [auth, setAuth] = useState<IAuth>()

    function removeAuth(){
        setAuth(undefined)
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
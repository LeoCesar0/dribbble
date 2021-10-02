import { useEffect } from "react"
import Header from "../../components/Header"
import { useGlobalContext } from "../../context/GlobalContext"
import { apiWithAuth } from "../../services/api"



const Home: React.FC = () => {
    const context = useGlobalContext()

    const user = context.auth

    const getPosts = async () => {
        const {data} = await apiWithAuth.get("/posts")

        console.log({data})
    }

    useEffect(()=> {
        getPosts()
    }, [])
    

    return (
        <div>
            <Header />
            <h1>PAGE HOME</h1>
            <h1>Usuário: {user?.user.name} </h1>

            
        </div>
    )
}


export default Home
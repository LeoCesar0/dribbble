import Header from "../../components/Header"
import { useGlobalContext } from "../../context/GlobalContext"



const Home: React.FC = () => {
    const context = useGlobalContext()

    const user = context.auth

    return (
        <div>
            <Header />
            <h1>PAGE HOME</h1>
            <h1>Usuário: {user?.user.name} </h1>
        </div>
    )
}


export default Home
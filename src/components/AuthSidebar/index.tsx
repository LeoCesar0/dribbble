import {Container, Title, Image, Logo} from "./styles"

import sidebarImage from "../../assets/images/sidebar-image.png"
import logo from "../../assets/images/logo.png"

const AuthSidebar = () => {
    return(
    <Container>
        <Logo src={logo}></Logo>
        <Title>Discover the world's <br />top Designers & <br />Creatives.</Title>
        <Image src={sidebarImage}></Image>
    </Container>
    )
}

export default AuthSidebar
import { HeaderContainer, NavLinks } from "./styles"

import logo from "../../assets/images/header-logo.svg"

import { Link } from "react-router-dom"


const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <img className="header-logo" src={logo} alt="" />
            <NavLinks>
                <Link className="header-link" to="#" >Inspiration</Link>
                <Link className="header-link" to="#" >Find Work</Link>
                <Link className="header-link" to="#" >Learn Design</Link>
                <Link className="header-link" to="#" >Go Pro</Link>
                <Link className="header-link" to="#" >Hire Designers</Link>
            </NavLinks>
        </HeaderContainer>
    )
}

export default Header
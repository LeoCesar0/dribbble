import styled from "styled-components";



export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F3F3F4;

    background: white;
    color: #6E6D7A;

    .header-logo{
        width: max-content;
        margin-left: 30px;
        margin-right: 20px;
    }

    .header-link{
        color: #6E6D7A;
        margin-right: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        transition: 300ms;
    }

    .header-link:hover{
        color: var(--pink)
    }

`


export const NavLinks = styled.nav`
    
`
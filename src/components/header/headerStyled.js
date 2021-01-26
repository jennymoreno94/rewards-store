import styled from "styled-components";
import header from '../../assets/header-x1.png'
import logo from '../../assets/aerolab-logo.svg'

export const HeaderWrapper = styled.div`
    width:100;
`

export const HeaderImage = styled.div`
    width:100;
    display:flex;
    background-image: url(${header});
    height:30vw;
    background-size:cover;
`

export const HeaderLogo = styled.div`
    background-image: url(${logo});
`

export const HeaderTitle = styled.h6`
    font-family:'Source Sans Pro', sans-serif;
    font-size:64px;
    color:#ffffff;
    align-self: center;
    padding: 18rem 7rem 5rem   
`
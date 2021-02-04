import styled from "styled-components";
import header from '../../assets/header-x1.png'
 

const media = {
    desktop: '@media(min-width: 768px)'
}

export const HeaderWrapper = styled.div`
    width:100%;
`

export const HeaderImage = styled.div`
    width:100%;
    display:flex;
    background-image: url(${header});
    height:30vw;
    background-size:cover;
`

export const HeaderLogo = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    
`

export const ImageLogo = styled.img`
  width: 25px;
  height: 25px;
  display: block;
  padding: 1rem 0rem 1rem 2rem;
   ${media.desktop} {
        width: 36px;
        height: 36px;
    }
`;

export const HeaderUserCoin = styled.div`
    width:60%;
    display: flex;
    flex-direction: row; 
    padding: 1rem 0.5rem 1rem 2rem;
    ${media.desktop} {
        padding: 1rem 2rem 1rem 0rem;
        width:20%;
    }
`

export const ButtonCoin = styled.button`
   height: 30px;
   border: none;
   display:flex;
   justify-content: space-between;
   padding:0.2rem;
   border-radius: 1rem;
   outline: none;
   cursor: pointer;
    ${media.desktop} {
        height: 40px;
    }
`
export const TextButtonCoin = styled.p`
   font-family:'Source Sans Pro', sans-serif;
   font-size:20px;
   margin: 0 auto;
   padding-left:0.5rem;
   line-height: 1.314rem; 
   ${media.desktop} {
        font-size: 25px;
        line-height: 2rem;
    } 
`

export const HeaderTitle = styled.h6`
    font-family:'Source Sans Pro', sans-serif;
    font-size:20px;
    color:#ffffff;
    align-self: center;
    padding-top: 1.5rem;
    padding-left: 2rem;
    margin:0px;
    ${media.desktop} {
        font-size:64px;
        padding-top: 5rem;
        padding-left: 4rem;
    }
`

export const ImageCoin = styled.img`
  width: 25px;
  height: 25px; 
   ${media.desktop} {
        padding: 0.1rem;
        width: 36px;
        height: 36px;
    }
`;

export const UserName = styled.h6`
    height: auto;
    font-family:'Source Sans Pro', sans-serif;
    font-size:10px;
    color:black;
    align-self: center;
    margin:0px;
    padding: 0.5rem 0.5rem 0.5rem 0rem;
    ${media.desktop} {
        font-size:16px;
    }
`


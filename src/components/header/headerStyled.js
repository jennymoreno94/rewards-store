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

export const ImageLogo = styled.img.attrs({
    alt: 'Logo',
})`
  width: 25px;
  height: 25px;
  display: block;
  padding: 1rem 0rem 1rem 2rem;
   ${media.desktop} {
        width: 36px;
        height: 36px;
    }
`;

export const HeaderDiv = styled.div`
    width:80%;
    display: flex;
    flex-direction: row; 
    padding: 1rem 0.5rem 1rem 2rem;
    ${media.desktop} {
        padding: 1rem 2rem 1rem 0rem;
        width:40%;
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

export const ImageCoin = styled.img.attrs({
    alt: 'Coin',
})`
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
    margin-left:0.5rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    ${media.desktop} {
        font-size:16px;
    }
`

export const propsGeneralButton = (matches) => ({
    height: matches ? "40px" : "30px",
    backgroundColor: matches ? "#e9e7e7" : "#ffffff",
    padding: "0.2rem",
    borderRadius: "1rem",
    margin: "0 0 0 0.2rem",
    cursor: "pointer",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: matches ? "25px" : "20px",
    marginText: "0 auto",
    paddingText: "0 0 0 0.5rem",
    lineHeight: matches ? "2rem" : "1.314rem",
    colorHovered: "#15dbff" 
});

export const propsGeneralModal = (matches) => ({
    width: matches ? "400px" : "300px",
    height: "150px",
    backgroundColor: "rgba(0,0,0, .85)"
})

export const propsButtonCoins = {
    backgroundColor: "#e9e8e8"
}

export const propsButtonUser = {
    colorHovered: "#e9e7e7",
    backgroundColor: "#e9e7e7",
    cursor: "auto"
}

export const propsIconButton = (coin) => ({
    color: coin ? "#FFCF00" : "#FF8000",
    fontSize: "25px",
    padding: "0.2rem"
})

export const propsMenuButtons = (matches) => ({
    colorHovered: matches ? "#15dbff" : "#FFFFFF" 
})

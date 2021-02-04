import React from "react";
import { HeaderWrapper, 
        HeaderImage, 
        HeaderTitle, 
        HeaderLogo,
        HeaderUserCoin,
        ImageLogo,
        ImageCoin,
        ButtonCoin,
        TextButtonCoin,
        UserName } from "../header/headerStyled";
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/coin.svg'  

const handleChange = () => {
    alert("hola");
  };

export function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo>
                 <ImageLogo src={logo} alt="Logo" />
                <HeaderUserCoin>
                    <UserName> Jenny Moreno Vallejo </UserName>
                   <ButtonCoin>
                   <TextButtonCoin>1000</TextButtonCoin>
                     <ImageCoin src={coin} alt="Coin" onClick={() => handleChange()} />
                   </ButtonCoin>   
                </HeaderUserCoin>
             </HeaderLogo>
            <HeaderImage>
                <HeaderTitle> Electronics</HeaderTitle>
            </HeaderImage>
        </HeaderWrapper>
    )
} 
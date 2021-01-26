import React from "react";
import { HeaderWrapper, 
        HeaderImage, 
        HeaderTitle, 
        HeaderLogo } from "../header/headerStyled";
        
export function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo/>
            <HeaderImage>
                <HeaderTitle> Electronics</HeaderTitle>
            </HeaderImage>
        </HeaderWrapper>
    )
} 
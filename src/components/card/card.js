import React from 'react';
import {CardWrapper,
        CardBody,
        CardCategory,
        CardProduct,
        CardImage,
        CardIcon,
        CardDivIcon,
        CardLine,
        CardNeed,
        CardImageCoin,
        CardImageDiv} from '../card/cardStyled'
import acer from '../../assets/product-pics/AcerAspire-x1.png'
import icon from '../../assets/buy-blue.svg'
import coin from '../../assets/coin.svg'  

const dataFilters = [1,2,3,4,5,6];
let dineroIncompleto = false;
export function Card () {
    return(
        <>
        <CardWrapper>
        {dataFilters.map((item, index) => {
            return (
              <section key={index}>
                    <CardBody>
                        <CardDivIcon>
                            {dineroIncompleto ? 
                            <CardNeed>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed> 
                            : 
                            <CardIcon src={icon} onClick={() => alert("click")}/>}
                        </CardDivIcon> 
                        <CardImageDiv>
                          <CardImage src={acer} />
                        </CardImageDiv>
                        <CardLine/>
                        <CardCategory>Latops</CardCategory>
                        <CardProduct>Acer Aspire E1-522</CardProduct>
                    </CardBody> 
              </section>
            );
          })}
        </CardWrapper>
        </>

     );
}
import React, { useState, useEffect }from 'react';
import {
  CardWrapper,
  CardBody,
  CardCategory,
  CardProduct,
  CardImage,
  CardIcon,
  CardDivIcon,
  CardLine,
  CardNeed,
  CardImageCoin,
  CardImageDiv,
  CardOverlay,
  ButtonBuy,
  CardBuy,
  CardTextBuy
} from '../card/cardStyled'
import acer from '../../assets/product-pics/AcerAspire-x1.png'
import iconblue from '../../assets/buy-blue.svg'
import iconwhite from '../../assets/buy-white.svg'
import coin from '../../assets/coin.svg'
import { Button } from '../transversal/buttonComponent/button'

const dataFilters = [1, 2, 3, 4, 5, 6];
let dineroIncompleto = true;
let hovered = true;

export function Card() {

  const [queryMatch, setQueryMatch] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      let matches = e.matches;
      setQueryMatch({ ...queryMatch, matches })
    })
  });

  const propsButton = {
    height: "auto",
    width: "80%",
    backgroundColor: "#fbfbfb",
    borderRadius: "2rem",
    margin: "0rem 2rem 0rem",
    cursor: "pointer",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: "18px",
    color: "#616161",
    marginText: queryMatch.matches ? "1.2rem 0 1.2rem 1rem" : "1.5rem 0 1.5rem 4rem",
    paddingText: queryMatch.matches ?  "0 0 0 3rem" : "0 0 0 0.5rem",
  }

  return (
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
                    hovered ? <div style={{ margin: "2.3rem" }} /> : <CardIcon src={iconblue} />}
                </CardDivIcon>
                <CardImageDiv>
                  <CardImage src={acer} />
                </CardImageDiv>
                <CardLine />
                <CardCategory>Latops</CardCategory>
                <CardProduct>Acer Aspire E1-522</CardProduct>
                {hovered ?
                  <CardOverlay>
                    <CardDivIcon>
                      {dineroIncompleto ?
                        <CardNeed style={{ opacity: "1", background: "#fbfbfb", color: "#616161" }}>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed>
                        :
                        <CardIcon src={iconwhite} />}
                      {/*{ hovered && !dineroIncompleto ? <CardIcon src={iconwhite}/> :  <CardNeed style={{opacity: "1",background:"#fbfbfb",color:"#616161"}}>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed>   }*/}
                    </CardDivIcon>
                    <CardBuy>
                      <CardTextBuy>12.000 <CardImageCoin style={{ width: "36px", height: "36px" }} src={coin} alt="Coin" /></CardTextBuy>
                      <Button onClick={() => { alert("hola") }} propsButton={propsButton} tittle={"Reedem now"}></Button>
                      {/*<ButtonBuy onClick={() => { alert("hola") }}>Reedem now</ButtonBuy>*/ }
                    </CardBuy>
                  </CardOverlay> : null}
              </CardBody>
            </section>
          );
        })}
      </CardWrapper>
    </>

  );
}
import React, { useState, useEffect } from 'react';
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
  CardTextBuy,
  CardConfirmation,
  CardTextConfirmation,
  CardButtonConfirmation,
  CardMessageConfirmation,
  CardImageMessageConfirmation
} from '../card/cardStyled'
import acer from '../../assets/product-pics/AcerAspire-x1.png'
import iconblue from '../../assets/buy-blue.svg'
import iconwhite from '../../assets/buy-white.svg'
import coin from '../../assets/coin.svg'
import { Button } from '../transversal/buttonComponent/button'
import { Modal } from '../modal/modal'
import smile from '../../assets/smiley.svg'

const dataFilters = [1, 2, 3, 4, 5, 6];
let dineroIncompleto = true;
let hovered = true;

export function Card() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isReedem, setIsReedem] = useState(false);
  const [queryMatch, setQueryMatch] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      let matches = e.matches;
      setQueryMatch({ ...queryMatch, matches })
    })
  });

  const handleChange = (open) => {
    setIsOpenModal(open);
    setIsReedem(false)
  };

  const handleReedme = () => {
    setIsReedem(true)
    setIsOpenModal(false);
  };

  const handleConfirmationMessage = () => {
    setIsReedem(false)
  };


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
    paddingText: queryMatch.matches ? "0 0 0 3rem" : "0 0 0 0.5rem",
  }

  const propsButtonConfirmation = {
    margin: "0rem 2rem 4rem",
  }

  const propsModal = {
    width: queryMatch.matches ? "400px" : "300px",
    height: "auto",
    backgroundColor: "rgba(0,0,0, .35)"
  }
  return (
    <>
      <CardWrapper>
        {dataFilters.map((item, index) => {
          return (
            <section key={index}>



              <CardBody background={isReedem ? "linear-gradient(to right, #78ffd6, #a8ff78)" : null}>


                {isReedem ?
                  <div>
                    <CardImageDiv>
                      <CardImage widthImage={"60%"} heightImage={"auto"} src={smile} />
                    </CardImageDiv>
                    

                      <CardCategory>Success!</CardCategory>
                      <CardProduct>You've redeem the product successfully</CardProduct>

                      {/*<CardTextBuy>You've redeem the product successfully</CardTextBuy>*/}
                      <Button onClick={handleConfirmationMessage} propsButton={{...propsButton,propsButtonConfirmation}} tittle={"Continue"}></Button>
                      {/*<ButtonBuy onClick={() => { alert("hola") }}>Reedem now</ButtonBuy>*/}
                    

                  </div>



                  :
                  <div>


                    <CardDivIcon>
                      {dineroIncompleto ?
                        <CardNeed>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed>
                        :
                        hovered ? <div style={{ margin: "2.3rem" }} /> : <CardIcon src={iconblue} />}
                    </CardDivIcon>
                    <CardImageDiv>
                      <CardImage  src={acer} />
                    </CardImageDiv>
                    <CardLine />
                    <CardCategory>Latops</CardCategory>
                    <CardProduct>Acer Aspire E1-522</CardProduct>
                    <Modal
                      isOpenModal={isOpenModal}
                      setIsOpenModal={setIsOpenModal}
                      tittle={"Reedem"}
                      propsModal={propsModal}
                    >

                      <CardConfirmation>
                        <CardTextConfirmation>Are you sure?</CardTextConfirmation>
                        <CardButtonConfirmation>
                          <Button onClick={handleReedme} propsButton={{ ...propsButton, marginText: "1rem", paddingText: queryMatch.matches ? "0 1rem" : "0 0 0 0.5rem", backgroundColor: "#e9e8e8" }} tittle={"Yes"} />
                          <Button onClick={() => { handleChange(false) }} propsButton={{ ...propsButton, marginText: "1rem", paddingText: queryMatch.matches ? "0 1rem" : "0 0 0 0.5rem", backgroundColor: "#e9e8e8" }} tittle={"No"} />

                        </CardButtonConfirmation>
                      </CardConfirmation>

                    </Modal>

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
                          <Button onClick={() => { handleChange(true) }} propsButton={propsButton} tittle={"Reedem now"}></Button>
                          {/*<ButtonBuy onClick={() => { alert("hola") }}>Reedem now</ButtonBuy>*/}
                        </CardBuy>
                      </CardOverlay> : null}
                  </div>
                }
              </CardBody>
            </section>
          );
        })}
      </CardWrapper>
    </>

  );
}
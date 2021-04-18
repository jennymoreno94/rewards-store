import React, { useState, useEffect,useContext } from 'react';
import {AppContext} from '../../context/appConext';
import {
  CardWrapper,
  CardBody,
  CardTittleH3,
  CardTittleH4,
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
import sad from '../../assets/sad.svg'

const dataFilters = [1, 2, 3, 4, 5, 6];
let dineroCompleto = true;
let hovered = true;
let error = true;

export function Card() {
  const { Products } = useContext(AppContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isReedem, setIsReedem] = useState(false);
  const [key, setKey] = useState("");


  const [queryMatch, setQueryMatch] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  console.log(Products);
  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      let matches = e.matches;
      setQueryMatch({ ...queryMatch, matches })
    })
  });

  const handleChange = (open) => {
    setIsOpenModal(open);
    setIsReedem(false);
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

  const propsModal = {
    width: queryMatch.matches ? "400px" : "300px",
    height: "auto",
    backgroundColor: "rgba(0,0,0, .35)"
  }
  return (
    <>

      <CardWrapper>
        {Products.map((item, index) => {
          console.log(item._id)
          return (
            <section key={item._id}>
              {console.log(key === item._id)}
              <CardBody background={key === item._id && isReedem ? error ? "linear-gradient(to left, #ed213a, #93291e);" : "linear-gradient(to right, #78ffd6, #a8ff78)" : null}>
                { key === item._id &&  isReedem ?
                   <div>
                    <CardImageDiv>
                      <CardImage widthImage={"60%"} heightImage={"auto"} src={error ? sad : smile} />
                    </CardImageDiv>
                    <CardTittleH3 textAlign="center" color="#f0faff">{error ? "Error!" : "Success!"}</CardTittleH3>
                    <CardTittleH4 textAlign="center" color="#f0faff">You've redeem the product successfully</CardTittleH4>
                    <Button onClick={handleConfirmationMessage} propsButton={{ ...propsButton, margin: "0rem 2rem 3rem", paddingText: queryMatch.matches ? "0 4rem 0 4rem" : "0 0 0 0.5rem", color: error ? "#bf0000" : "#009a00", }} tittle={error ? "TRY AGAIN" : "CONTINUE"}></Button>
                  </div> 
                  :
                  <div>
                    <CardDivIcon>
                      {dineroCompleto ?
                        hovered ? <div style={{ margin: "2.3rem" }} /> : <CardIcon src={iconblue} /> :
                        <CardNeed>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed>
                      }
                    </CardDivIcon>
                    <CardImageDiv>
                      <CardImage src={item.img.url} />
                    </CardImageDiv>
                    <CardLine />
                    <CardTittleH3>{item.category}</CardTittleH3>
                    <CardTittleH4>{item.name}</CardTittleH4>
                    <Modal
                      isOpenModal={isOpenModal}
                      setIsOpenModal={setIsOpenModal}
                      tittle={"Reedem"}
                      propsModal={propsModal}
                    >
                      
                      <CardConfirmation>
                        <CardTextConfirmation>Are you sure?</CardTextConfirmation>
                        <CardButtonConfirmation>
                          <Button onClick={() => {handleReedme}} propsButton={{ ...propsButton, marginText: "1rem", paddingText: queryMatch.matches ? "0 1rem" : "0 0 0 0.5rem", backgroundColor: "#e9e8e8" }} tittle={"Yes"} />
                          <Button onClick={() => { handleChange(false) }} propsButton={{ ...propsButton, marginText: "1rem", paddingText: queryMatch.matches ? "0 1rem" : "0 0 0 0.5rem", backgroundColor: "#e9e8e8" }} tittle={"No"} />
                        </CardButtonConfirmation>
                      </CardConfirmation> 
                    </Modal>

                    {hovered ?
                      <CardOverlay>

                        <CardDivIcon>
                          {dineroCompleto ?
                            <CardIcon src={iconwhite} /> :
                            <CardNeed style={{ opacity: "1", background: "#fbfbfb", color: "#616161" }}>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed>
                          }
                          {/*{ hovered && !dineroIncompleto ? <CardIcon src={iconwhite}/> :  <CardNeed style={{opacity: "1",background:"#fbfbfb",color:"#616161"}}>You need 1000 <CardImageCoin src={coin} alt="Coin" /> </CardNeed>   }*/}
                        </CardDivIcon>
                        <CardBuy>
                          <CardTextBuy>12.000 <CardImageCoin style={{ width: "36px", height: "36px" }} src={coin} alt="Coin" /></CardTextBuy>
                          {hovered && dineroCompleto ? <Button onClick={() => { handleChange(true) }} propsButton={propsButton} tittle={"Reedem now"}></Button> : null}
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
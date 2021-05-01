import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appConext';
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
import coin from '../../assets/coin.svg'
import { Button } from '../transversal/buttonComponent/button'
import { Modal } from '../modal/modal'
import smile from '../../assets/smiley.svg'
import sad from '../../assets/sad.svg'
import postData from '../../utils/postMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'


export function Card() {
  const { user, isHistory, pagination } = useContext(AppContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isReedem, setIsReedem] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [queryMatch, setQueryMatch] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      let matches = e.matches;
      setQueryMatch({ ...queryMatch, matches })
    })
  });


  const handleChange = (open, key) => {
    setIsOpenModal(open);
    setIsReedem(false)
    setKey(key);
  };

  const handleReedme = (key) => {
    return postData.postRedeem(key).then((response) => {
      if (response.error === undefined || response.error === "") {
        setIsError(false);
        setMessage(response.message)
      } else {
        setIsError(true);
        setMessage(response.error)
      }
      setIsOpenModal(false);
      setIsReedem(true)
    }).catch((error) => {
      setMessage(error)
      setIsError(true);
    });

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
    colorHovered: "#15dbff"
  }

  const propsModal = {
    width: queryMatch.matches ? "400px" : "300px",
    height: "auto",
    backgroundColor: "rgba(0,0,0, .35)"
  }

  return (
    <>
      { isHistory ? null :
        <CardWrapper>
          {Object.entries(pagination.currentData).length === 0 ? <h1>Sin datos</h1> :
            pagination.currentData.map((item, index) => {
              return (
                <section key={item._id}>
                  <CardBody
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    background={key === item._id && isReedem ? isError ? "linear-gradient(to left, #ed213a, #93291e);" : "linear-gradient(to right, #78ffd6, #a8ff78)" : null}>
                    {key === item._id && isReedem ?
                      <div>
                        <CardImageDiv>
                          <CardImage widthImage={"60%"} heightImage={"auto"} src={isError ? sad : smile} />
                        </CardImageDiv>
                        <CardTittleH3 textAlign="center" color="#f0faff">{isError ? "Error!" : "Success!"}</CardTittleH3>
                        <CardTittleH4 textAlign="center" color="#f0faff">{message}</CardTittleH4>
                        <Button onClick={handleConfirmationMessage} propsButton={{ ...propsButton, margin: "0rem 2rem 3rem", paddingText: queryMatch.matches ? "0 4rem 0 4rem" : "0 0 0 0.5rem", color: isError ? "#bf0000" : "#009a00", colorHovered: "#fbfbfb" }} tittle={isError ? "TRY AGAIN" : "CONTINUE"}></Button>
                      </div>
                      :
                      <div>
                        <CardDivIcon>

                          {(user.points > item.cost) ?
                            <FontAwesomeIcon icon={faShoppingBag} style={{
                              backgroundColor: "#0AD4FA",
                              color: "#FFFFFF",
                              fontSize: "25px",
                              borderRadius: "50%",
                              padding: "0.5rem",
                              margin: "1rem"
                            }} /> :
                            <CardNeed>You need {item.cost - user.points} <CardImageCoin src={coin} alt="Coin" /> </CardNeed>
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
                              <Button onClick={() => { handleReedme(key) }} propsButton={{ ...propsButton, marginText: "1rem", paddingText: queryMatch.matches ? "0 1rem" : "0 0 0 0.5rem", backgroundColor: "#e9e8e8" }} tittle={"Yes"} />
                              <Button onClick={() => { handleChange(false, key) }} propsButton={{ ...propsButton, marginText: "1rem", paddingText: queryMatch.matches ? "0 1rem" : "0 0 0 0.5rem", backgroundColor: "#e9e8e8" }} tittle={"No"} />
                            </CardButtonConfirmation>
                          </CardConfirmation>
                        </Modal>

                        {isHovered ?
                          <CardOverlay>

                            <CardDivIcon>
                              {(user.points > item.cost) ?
                                <FontAwesomeIcon icon={faShoppingBag} style={{
                                  backgroundColor: "#FFFFFF",
                                  color: "#0AD4FA",
                                  fontSize: "25px",
                                  borderRadius: "50%",
                                  padding: "0.5rem",
                                  margin: "1rem"
                                }} /> :
                                <CardNeed style={{ opacity: "1", background: "#fbfbfb", color: "#616161" }}>You need {item.cost - user.points} <CardImageCoin src={coin} alt="Coin" /> </CardNeed>
                              }
                            </CardDivIcon>
                            <CardBuy>
                              <CardTextBuy>{item.cost}<CardImageCoin style={{ width: "36px", height: "36px" }} src={coin} alt="Coin" /></CardTextBuy>
                              {isHovered && (user.points > item.cost) ? <Button onClick={() => { handleChange(true, item._id) }} propsButton={{ ...propsButton, colorHovered: "#fbfbfb" }} tittle={"Reedem now"}></Button> : null}
                            </CardBuy>
                          </CardOverlay> : null}
                      </div>
                    }
                  </CardBody>
                </section>
              );
            })}
        </CardWrapper>}
    </>

  );
}
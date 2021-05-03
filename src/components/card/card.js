import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appConext';
import {
  CardWrapper,
  CardBody,
  CardTittleH3,
  CardTittleH4,
  CardImage,
  CardDivIcon,
  CardLine,
  CardNeed,
  CardImageCoin,
  CardImageDiv,
  CardOverlay,
  CardBuy,
  CardTextBuy,
  CardConfirmation,
  CardTextConfirmation,
  CardButtonConfirmation,
  propsGeneralButton,
  propsGeneralModal,
  propsModalButton,
  propsButtonReedem,
  propsConfirmationButton,
  propsTittleConfirmation,
  propsShoppingBag,
  propsCardNeed,
  propsCardImage,
  propsCardImageCoin,
  propsCardBoddy
} from '../card/cardStyled'
import coin from '../../assets/coin.svg'
import { Button } from '../transversal/buttonComponent/button'
import { Modal } from '../modal/modal'
import smile from '../../assets/smiley.svg'
import sad from '../../assets/sad.svg'
import postData from '../../utils/postMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import getData from '../../utils/getMethods';
import {ConstCard,MediaQuery} from '../../utils/constants'

export function Card() {
  const { user, pagination, setUser } = useContext(AppContext);
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
    window.matchMedia(MediaQuery.tablet).addEventListener("change", (e) => {
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
        getData.getUser()
        .then(response => {
          setUser(response);
        });
  
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

  const propsButton = propsGeneralButton(queryMatch.matches);
  const propsModal = propsGeneralModal(queryMatch.matches);

  return (
    <>
        <CardWrapper>
          {Object.entries(pagination.currentData).length === 0 ? <h1>Sin datos</h1> :
            pagination.currentData.map((item, index) => {
              return (
                <section key={item._id}>
                  <CardBody
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    theme={key === item._id && isReedem ? propsCardBoddy(isError) : null}>
                    {key === item._id && isReedem ?
                      <div>
                        <CardImageDiv>
                          <CardImage theme={propsCardImage} src={isError ? sad : smile} />
                        </CardImageDiv>
                        <CardTittleH3 theme={propsTittleConfirmation}>{isError ? ConstCard.error : ConstCard.success}</CardTittleH3>
                        <CardTittleH4 theme={propsTittleConfirmation}>{message}</CardTittleH4>
                        <Button onClick={handleConfirmationMessage} propsButton={{ ...propsButton,...propsConfirmationButton(queryMatch.matches,isError)}} tittle={isError ? ConstCard.try : ConstCard.continue}></Button>
                      </div>
                      :
                      <div>
                        <CardDivIcon>
                          {(user.points > item.cost) ?
                            <FontAwesomeIcon icon={faShoppingBag} style={propsShoppingBag(true)} /> :
                            <CardNeed>{ConstCard.coinNeed} {item.cost - user.points} <CardImageCoin src={coin} /> </CardNeed>
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
                          tittle={ConstCard.tittleModal}
                          propsModal={propsModal}
                        >
                          <CardConfirmation>
                            <CardTextConfirmation>{ConstCard.modalText}</CardTextConfirmation>
                            <CardButtonConfirmation>
                              <Button onClick={() => { handleReedme(key) }} propsButton={{ ...propsButton,...propsModalButton(queryMatch.matches)}} tittle={ConstCard.affirmation} />
                              <Button onClick={() => { handleChange(false, key) }} propsButton={{ ...propsButton,...propsModalButton(queryMatch.matches)}} tittle={ConstCard.negation} />
                            </CardButtonConfirmation>
                          </CardConfirmation>
                        </Modal>
                        {isHovered ?
                          <CardOverlay>
                            <CardDivIcon>
                              {(user.points > item.cost) ?
                                <FontAwesomeIcon icon={faShoppingBag} style={propsShoppingBag(false)} /> :
                                <CardNeed theme={propsCardNeed}>{ConstCard.coinNeed} {item.cost - user.points} <CardImageCoin src={coin}/> </CardNeed>
                              }
                            </CardDivIcon>
                            <CardBuy>
                              <CardTextBuy>{item.cost}<CardImageCoin theme={propsCardImageCoin} src={coin} /></CardTextBuy>
                              {isHovered && (user.points > item.cost) ? <Button onClick={() => { handleChange(true, item._id) }} propsButton={{ ...propsButton,...propsButtonReedem}} tittle={ConstCard.tittleReedme}></Button> : null}
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
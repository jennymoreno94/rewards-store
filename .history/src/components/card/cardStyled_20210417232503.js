import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1vw;
  margin-top: 2rem;
`;

export const CardBody = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding-bottom: 1px;
    margin: 0.5rem;
    position: relative;
    &:hover{
      opacity: 0.7;
    }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity:0;
  transition: .5s ease;
  background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
  border-radius: 10px;
  &:hover{
      opacity: 0.8;
  }
`;

export const CardImageDiv = styled.div`
   width: 100%;
`;

export const CardImage = styled.img`
  display: block;
  width: 20%;
  height: 30%;
`;

export const CardLine = styled.hr`
  margin: 0rem 1.5rem;
  height: 1px;
  background-color: #dcdcdc;
  border: none; 
`;
export const CardDivIcon = styled.div`
  width:100%;
  display: flex;
  flex-direction:row-reverse;
`;

export const CardIcon = styled.img`
  margin:1rem;
`;

export const CardNeed = styled.div`
  opacity:0.6;
  background:#616161;
  border-radius: 100px;
  height:42px;
  font-family:'Source Sans Pro', sans-serif;
  font-size:20px;
  margin: 1rem;
  padding-left: 0.8rem;
  padding-right:0.5rem;
  line-height: 2.314rem; 
  text-align:center;
  color:#ffffff;
`;

export const CardImageCoin = styled.img`
  width: 25px;
  height: 25px;
  vertical-align:middle;
`;

export const CardCategory = styled.h3`
  font-family: Quicksand, arial, sans-serif;
  margin-left: 16px;
`;

export const CardProduct = styled.h4`
  font-family: Quicksand, arial, sans-serif;
  margin-left: 18px;
`;

export const ButtonBuy = styled.button`
   font-family:'Source Sans Pro', sans-serif;
   width:80%;
   height:auto;
   margin: 0rem 2rem 0rem;
   border: none;
   border-radius: 2rem;
   outline: none;
   padding:1rem;
   cursor: pointer;  
   background:#fbfbfb;  
   font-size:18px;
   color:#616161;
   text-align:center;
`

export const CardBuy = styled.div`
  width:100%;
  margin-top:4rem;
`

export const CardTextBuy = styled.h3`
  color:#000000;
  text-align:center;
  padding-top:1rem;
  font-size:36px;
`

export const CardConfirmation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    flex-direction:column;

`;

export const CardTextConfirmation = styled.p`
   font-family:'Source Sans Pro', sans-serif;
   color: #000000;
   font-size:20px;
   margin: 0.5rem 1rem;
   line-height: 2rem; 
`;

export const CardButtonConfirmation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    flex-direction:row;
    
`;

export const CardMessageConfirmation = styled.div`
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding-bottom: 1px;
    margin: 0.5rem;
    position: relative;
    background: #a8ff78;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const CardImageMessageConfirmation = styled.img`
  width: 25px;
  height: 25px;
  vertical-align:middle;
`;
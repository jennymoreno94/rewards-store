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
    background: ${props => props.theme.background};
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
   display: flex;
   justify-content: center;
   width: 100%;
`;

export const CardImage = styled.img.attrs({
  alt: 'cardImage',
  width: "100%",
  height: "auto"
})`
  display: block;
  width: ${props => props.theme.widthImage ? props.theme.widthImage : "100%"};
  height: ${props => props.theme.heightImage ? props.theme.heightImage : "auto"};
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

export const CardNeed = styled.div`
  opacity: ${props => props.theme.opacity ? props.theme.opacity : 0.6};
  background: ${props => props.theme.background ? props.theme.background : "#616161"};
  border-radius: 100px;
  height:42px;
  font-family:'Source Sans Pro', sans-serif;
  font-size:20px;
  margin: 1rem;
  padding-left: 0.8rem;
  padding-right:0.5rem;
  line-height: 2.314rem; 
  text-align:center;
  color:${props => props.theme.background ? props.theme.background : "#ffffff"};
`;

export const CardImageCoin = styled.img.attrs({
  alt: 'coin',
})`
  width: ${props => props.theme.width ? props.theme.width : "25px"};
  height: ${props => props.theme.height ? props.theme.height : "25px"};
  vertical-align:middle;
`;

export const CardTittleH3 = styled.h3`
  font-family: Quicksand, arial, sans-serif;
  margin-left: 16px;
  text-align: ${props => props.theme.textAlign};
  color: ${props => props.theme.color};
`;

export const CardTittleH4 = styled.h4`
  font-family: Quicksand, arial, sans-serif;
  margin-left: 18px;
  text-align:${props => props.theme.textAlign};
  color:${props => props.theme.color};
`;

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

export const ConfirmationMessage = styled.h3`
  font-family: Quicksand, arial, sans-serif;
  margin-left: 16px;
`;

export const propsGeneralModal = (matches) => ({
  height: "auto",
  backgroundColor: "rgba(0,0,0, .35)",
  width: matches ? "400px" : "300px",
})

export const propsModalButton = (matches) => ({
  marginText: "1rem",
  backgroundColor: "#e9e8e8",
  paddingText: matches ? "0 1rem" : "0 0 0 0.5rem"
})

export const propsGeneralButton = (matches) => ({
  height: "auto",
  width: "80%",
  backgroundColor: "#fbfbfb",
  borderRadius: "2rem",
  margin: "0rem 2rem 0rem",
  cursor: "pointer",
  fontFamily: "'Source Sans Pro', sans-serif",
  fontSize: "18px",
  color: "#616161",
  colorHovered: "#15dbff",
  marginText: matches ? "1.2rem 0 1.2rem 1rem" : "1.5rem 0 1.5rem 4rem",
  paddingText: matches ? "0 0 0 3rem" : "0 0 0 0.5rem",
});

export const propsButtonReedem = {
  colorHovered: "#fbfbfb",
}

export const propsConfirmationButton = (matches, isError) => ({
  margin: "0rem 2rem 3rem",
  paddingText: matches ? "0 4rem 0 4rem" : "0 0 0 0.5rem",
  color: isError ? "#bf0000" : "#009a00",
  colorHovered: "#fbfbfb"
})

export const propsTittleConfirmation = {
  textAlign: "center",
  color: "#f0faff"
}

export const propsShoppingBag = (blue) => ({
  backgroundColor: blue ? "#0AD4FA" : "#FFFFFF",
  color:  blue ? "#FFFFFF" :"#0AD4FA",
  fontSize: "25px",
  borderRadius: "50%",
  padding: "0.5rem",
  margin: "1rem"
})

export const propsCardNeed = {
  opacity: "1", 
  background: "#fbfbfb", 
  color: "#616161"
}

export const propsCardImage = {
  widthImage: "60%", 
  heightImage: "auto", 
}

export const propsCardImageCoin = {
  width: "50px", 
  height: "50px"
}

export const propsCardBoddy = (isError) => ({
  background: isError ? "linear-gradient(to left, #ed213a, #93291e);" : "linear-gradient(to right, #78ffd6, #a8ff78)"
})
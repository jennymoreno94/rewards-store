import styled from 'styled-components';


export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1vw;
  margin-top: 50px;
`;

export const CardBody = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding-bottom: 1px;
    margin: 0.5rem;
`;

export const CardImageDiv = styled.div`
   width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  display: block; 
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
  cursor: pointer;
`;

export const CardNeed = styled.div`
  opacity:0.8;
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




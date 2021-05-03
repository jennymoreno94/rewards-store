import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 768px)'
}

export const FilterWrapper = styled.div`
    width:100%;
    margin-top: 0px;
`;

export const FilterBody = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction:column;
    ${media.desktop} {
      flex-direction:row;
    }
`;

export const FilterTittle = styled.h3`
  font-size:20px;
  color: #616161;
  text-align: center;
  ${media.desktop} {
    width: 40%;
    margin-left: 0.5rem;
    font-size: 24px;
    line-height: 24px;
  }
`;

export const FilterVerticalLine = styled.span`
  margin: 0 0.3rem;
  border:thin solid #d9d9d9;
  ${media.desktop} {
    margin: 0 1rem;
  } 
`;

export const FilterGray = styled.span`
  color: #908e8e;
  font-size:20px;
  ${media.desktop} {
    font-size:24px;
    margin-right: 1rem;
  }
`;

export const FilterLine = styled.hr`
  margin: 0rem 1.5rem;
  height: 1px;
  background-color: #dcdcdc;
  border: none; 
`;

export const FilterSelect = styled.select`
  border-radius: 10px;
  width: 95%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin: 1.5rem 1rem;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  ${media.desktop} {
    width: 25%;
    }
`;

export const propsButton  = (matches) => ({
  height: matches ? "30%" : "auto",
  width: matches ? "15%" : "100%",
  backgroundColor: "#ededed",
  padding: "0 2.5rem",
  borderRadius: "2rem",
  margin: "0.3rem 1rem 0.3rem 0",
  cursor: "pointer",
  fontFamily: "'Source Sans Pro', sans-serif",
  fontSize: "18px",
  color: "#616161",
  marginText: matches ? "1.2rem 0 1.2rem 1rem" : "1.5rem 0 1.5rem 4rem",
  colorHovered: "#15dbff"
});
import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 768px)'
}

export const ContentPagination = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    flex-direction:row;
    ${media.desktop} {
      margin-left: 10rem;
    }
`;

export const ImagePaginacion = styled.img`
  width: 40px;
  height: 40px; 
   ${media.desktop} {
        padding: 0.1rem;
    }
`;


export const propsGeneralButton = (matches) => ({
  height: matches ? "40px" : "25px",
  width: matches ? "40px" : "25px",
  backgroundColor: "#ffffff",
  padding: "0",
  borderRadius: "100%",
  margin: "1rem",
  colorHovered: "#eceff1"
});
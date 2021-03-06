import styled from "styled-components";

const media = {
    desktop: '@media(min-width: 768px)'
}

export const FooterWrapper = styled.div`
    width:100%;
`;

export const FooterTittle = styled.h3`
  font-size:20px;
  color: #616161;
  text-align: center;
  ${media.desktop} {
    width: 15%;
    margin-left: 0.5rem;
    font-size: 24px;
    line-height: 24px;
  }
`;

export const FooterBody = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction:column;
    ${media.desktop} {
      flex-direction:row;
    }
`;

export const FooterDivTittle = styled.div`
    width:100%;
`;


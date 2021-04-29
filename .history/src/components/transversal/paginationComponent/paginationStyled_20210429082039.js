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
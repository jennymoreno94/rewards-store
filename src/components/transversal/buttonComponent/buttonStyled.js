import styled from 'styled-components'; 

const media = {
  desktop: '@media(min-width: 768px)'
}


export const MyButton = styled.button`
   //height: 30px;
   height : ${props => props.theme.height};
   background-color: ${props => props.theme.backgroundColor};
   border: none;
   display:flex;
   justify-content: space-between;
   //padding:0.2rem;
   padding:${props => props.theme.padding};
   border-radius: ${props => props.theme.borderRadius};
   //border-radius: 1rem;
   margin-left: ${props => props.theme.margin};
   //margin-left: 0.2rem;
   outline: none;
   cursor: ${props => props.theme.cursor};
   //cursor: pointer
`;

export const TextButton = styled.p`
   font-family:'Source Sans Pro', sans-serif;
   font-size:20px;
   margin: 0 auto;
   padding-left:0.5rem;
   line-height: 1.314rem; 
   ${media.desktop} {
        font-size: 25px;
        line-height: 2rem;
    } 
`


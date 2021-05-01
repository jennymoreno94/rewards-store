import styled from 'styled-components';


export const MyButton = styled.button`
   //height: 30px;
   height : ${props => props.theme.height};
   width : ${props => props.theme.width};
   background-color: ${props => props.theme.backgroundColor};
   border: none;
   display:flex;
   justify-content: space-between;
   //padding:0.2rem;
   padding:${props => props.theme.padding};
   border-radius: ${props => props.theme.borderRadius};
   //border-radius: 1rem;
   margin: ${props => props.theme.margin};
   //margin-left: 0.2rem;
   outline: none;
   cursor: ${props => props.theme.cursor};
   //cursor: pointer
   &:hover{
     background-color: ${props => props.theme.colorHovered}; //#15dbff
  }
`;

export const TextButton = styled.p`
   font-family:${props => props.theme.fontFamily};
   font-size:${props => props.theme.fontSize};
   margin: ${props => props.theme.marginText};
   padding:${props => props.theme.paddingText};
   line-height: ${props => props.theme.lineHeight};
   color:${props => props.theme.color};
  
`


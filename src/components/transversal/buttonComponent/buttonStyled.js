import styled from 'styled-components';


export const MyButton = styled.button`
   height : ${props => props.theme.height};
   width : ${props => props.theme.width};
   background-color: ${props => props.theme.backgroundColor};
   border: none;
   display:flex;
   justify-content: space-between;
   padding:${props => props.theme.padding};
   border-radius: ${props => props.theme.borderRadius};
   margin: ${props => props.theme.margin};
   outline: none;
   cursor: ${props => props.theme.cursor};
   &:hover{
     background-color: ${props => props.theme.colorHovered};
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


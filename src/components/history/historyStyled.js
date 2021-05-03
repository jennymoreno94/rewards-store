import styled from "styled-components"

export const Grid = styled.div`
    width:98%;
    margin: 2rem 1rem 0px 0.5rem;
`;

export const Principal = styled.div`
    width:100%;
    height:auto;
    &:nth-child(even) {
      background: #ebe7e7
    } 
`;

export const Row = styled.div`
    display:flex;
    padding: 4px 8px;
    border: 1px solid #ddd;
    background-color: ${props => props.backgroungColor};//#15dbff;
`;

const media = {
    xs: (styles) => `
    '@media(min-width: 768px)'{
        ${styles}
    }
`,
}

export const Column = styled.div`
   padding: 4px 8px;
   flex: ${(props) => props.size};
   ${(props) => props.collapse && media[props.collapse](`
        display:none;
  `)};
`;
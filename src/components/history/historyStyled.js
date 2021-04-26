import styled from "styled-components"

/*export const HistoryWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 1rem;
    &span {
        padding: 8px 4px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
    }

`



export const HistorySpanDetail = styled.span`
    padding: 8px 4px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
`
*/


/*export const Row = styled.div`
    border: 1px solid black;
    padding: 8px 0.5rem;
    margin: 0px 1rem;
    &::after {
        content:"";
        clear:both;
        display:table
    }
`;

export const Column = styled.div`
    float: left;
    width:100%;
    @media only screen and (min-width:768px){
        width:${props=> (props.span ? props.span / 12* 100 : "8.33")}%;
    }
`;*/

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
import styled from 'styled-components';

export const FilterWrapper = styled.div`
    width:100%;
    margin-top: 0px;
`;

export const FilterBody = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction:column;
    /*padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 15px;
    margin: 0 10px;*/
`;

export const FilterTittle = styled.h3`
  //margin-left: 1rem;
  //font-size: 24px;
  font-size:20px;
  color: #616161;
  text-align: center;
`;

export const FilterVerticalLine = styled.span`
  margin: 0 0.3rem;
  border:thin solid #d9d9d9;
  //margin: 0 1rem;
`;

export const FilterGray = styled.span`
  color: #a3a3a3;
  font-size:20px;
  //font-size:24px;
  /*margin-right: 1rem;*/
`;

export const FilterButton = styled.button`
  font-family:'Source Sans Pro', sans-serif;
   width:100%;
   height:auto;
   margin: 0.3rem 1rem 0.3rem 0;
   border: none;
   border-radius: 2rem;
   outline: none;
   cursor: pointer;  
   background:#ededed;  
   font-size:18px;
   color:#616161;
   text-align:center;
   padding: 1rem 0;
`

export const FilterLine = styled.hr`
  margin: 0rem 1.5rem;
  height: 1px;
  background-color: #dcdcdc;
  border: none; 
`;
import styled from "styled-components";
export const TableContainer = styled.table`
    width: 100%;
    text-align: center;
    font-size: 16px;
`;
export const TableTr = styled.tr`
    border: 1px solid black;
`;
export const TableTd = styled.td`
    border : 1px solid black;
    padding: 2px;
    height: 10px;
    box-sizing:border-box;
`;
export const TableThead = styled.thead`
    background-color  : ${props => props.theme.bgBlueColor};
    font-weight: bold;
`;
export const TableTBody = styled.tbody``;
import styled from "styled-components";
import { IGathering } from "../../../models/gathering";
import { TableTd,TableThead,TableContainer,TableTr,TableTBody } from "../../../styles/Table";
const NumberTableTd = styled(TableTd)`
    padding:15px;
`;
const GatherNumberTable = ({allGatherList}:{allGatherList:IGathering[]}) => {
    return (
        <TableContainer style={{width:"30%",minWidth:"440px"}}>
        <TableThead>
            <TableTr>
            <NumberTableTd>총 모임수</NumberTableTd>
            <NumberTableTd>오늘</NumberTableTd>
            <NumberTableTd>이번주</NumberTableTd>
            <NumberTableTd>이번달</NumberTableTd>
            <NumberTableTd>올해</NumberTableTd>
            </TableTr>
        </TableThead>
        <TableTBody>
            <TableTr>
            <NumberTableTd>{allGatherList.length}</NumberTableTd>
            <NumberTableTd>오늘</NumberTableTd>
            <NumberTableTd>이번주</NumberTableTd>
            <NumberTableTd>이번달</NumberTableTd>
            <NumberTableTd>올해</NumberTableTd>
            </TableTr>
        </TableTBody>
    </TableContainer>
    );
}
export default GatherNumberTable;
import styled from "styled-components";
import { IUser } from "../../../models/user";
import { TableContainer, TableTBody, TableTd, TableThead, TableTr } from "../../../styles/Table"
const NumberTableTd = styled(TableTd)`
    padding:15px;
`;

const UserNumberTable = ({userList}:{userList:IUser[]}) =>{
    return (
        <TableContainer style={{width:"30%",minWidth:"440px"}}>
            <TableThead>
                <TableTr>
                <NumberTableTd>전체 회원수</NumberTableTd>
                <NumberTableTd>오늘</NumberTableTd>
                <NumberTableTd>이번주</NumberTableTd>
                <NumberTableTd>이번달</NumberTableTd>
                <NumberTableTd>출첵</NumberTableTd>
                </TableTr>
            </TableThead>
            <TableTBody>
                <TableTr>
                <NumberTableTd>{userList.length}</NumberTableTd>
                <NumberTableTd>오늘</NumberTableTd>
                <NumberTableTd>이번주</NumberTableTd>
                <NumberTableTd>이번달</NumberTableTd>
                <NumberTableTd>출첵</NumberTableTd>
                </TableTr>
            </TableTBody>
        </TableContainer>
    )
}
export default UserNumberTable;
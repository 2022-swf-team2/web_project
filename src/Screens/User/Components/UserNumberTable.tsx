import styled from "styled-components";
import { IUser } from "../../../models/user";
import { TableContainer, TableTBody, TableTd, TableThead, TableTr } from "../../../styles/Table"
const NumberTableTd = styled(TableTd)`
    padding:15px;
`;

const UserNumberTable = ({userList}:{userList:IUser[]}) =>{
    const today = userList.filter((e)=>{
        const signDate = new Date(e.timeStamp);
        const now = new Date(Date.now());
        const todayDateStart = new Date(now.getFullYear(),now.getMonth(),now.getDate());
        const todayDateEnd = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
        //inputEndDate.setDate(inputEndDate.getDate()+1);
        return signDate<todayDateEnd && signDate>=todayDateStart;
    }).length;
    const thisWeek = userList.filter((e)=>{
        const signDate = new Date(e.timeStamp);
        const now = new Date(Date.now());
        const weekDateStart = new Date(now.getFullYear(),now.getMonth(),now.getDate()-6);
        const weekDateEnd = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
        //inputEndDate.setDate(inputEndDate.getDate()+1);
        return signDate<weekDateEnd && signDate>=weekDateStart;
    }).length;
    const thisMonth = userList.filter((e)=>{
        const signDate = new Date(e.timeStamp);
        const now = new Date(Date.now());
        const monthDateStart = new Date(now.getFullYear(),now.getMonth(),now.getDate()-30);
        const monthDateEnd = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
        //inputEndDate.setDate(inputEndDate.getDate()+1);
        return signDate<monthDateEnd && signDate>=monthDateStart;
    }).length;
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
                <NumberTableTd>{today}</NumberTableTd>
                <NumberTableTd>{thisWeek}</NumberTableTd>
                <NumberTableTd>{thisMonth}</NumberTableTd>
                <NumberTableTd>미구현</NumberTableTd>
                </TableTr>
            </TableTBody>
        </TableContainer>
    )
}
export default UserNumberTable;
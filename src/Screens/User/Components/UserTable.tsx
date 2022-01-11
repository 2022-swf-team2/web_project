import { useState } from "react";
import styled from "styled-components";
import { IUser } from "../../../models/user";
import UserTableList from "./UserTableList";
import UserTablePage from "./UserTablePage";

const UserTableWrapContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const UserTableContainer = styled.table`
    width: 100%;
    text-align: center;
    font-size: 16px;
`;
const UserTableTr = styled.tr`
    border: 1px solid black;
`;
export const UserTableTd = styled.td`
    border : 1px solid black;
    padding: 2px;
    height: 10px;
    box-sizing:border-box;
`;
const UserTableThead = styled.thead`
    background-color  : ${props => props.theme.bgBlueColor};
    font-weight: bold;
`;
const UserTableTBody = styled.tbody``;
const UserTable = ({ userList }: { userList: IUser[] }) => {
    console.log(userList);
    const pages: number[] = [];
    const [currentPage, setCurrentPage] = useState<number>(1);
    for (let i = 0; i <= ((userList.length - 1) / 10); i++) {
        pages.push(i + 1);
    }
    const pageUserList = userList.slice((currentPage - 1) * 10, (currentPage) * 10);
    return (
        <UserTableWrapContainer>
            <UserTableContainer>
                <UserTableThead>
                    <UserTableTr>
                        <UserTableTd>비고</UserTableTd>
                        <UserTableTd>번호</UserTableTd>
                        <UserTableTd>가입일시</UserTableTd>
                        <UserTableTd>닉네임</UserTableTd>
                        <UserTableTd>휴대폰번호</UserTableTd>
                        <UserTableTd>신상정보</UserTableTd>
                        <UserTableTd>상태</UserTableTd>
                    </UserTableTr>
                </UserTableThead>
                <UserTableTBody>
                    {pageUserList.map((user, idx) => {
                        return (
                            <UserTableList
                                idx={idx + ((currentPage - 1) * 10)}
                                signDate={user.signDate}
                                name={user.name}
                                phoneNumber={user.phoneNumber}
                                job={user.job}
                                status="일반"
                                key={idx}
                            />);
                    })}
                </UserTableTBody>
            </UserTableContainer>
            <UserTablePage pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </UserTableWrapContainer>
    )
}
export default UserTable;
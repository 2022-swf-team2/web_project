import styled from "styled-components";
import { UserTableTd } from "./UserTable";

interface IUserTableList {
    idx:number,
    signDate:string,
    name:string,
    phoneNumber:string,
    job:string,
    status:string,
}
const UserTableListTr = styled.tr`
    border:1px solid black;
`;
const UserTableCheckBox = styled.input`
    height: 20px;
    width: 20px;
    &:checked + label{
        background: red;
    }
`
const UserTableList = ({idx,signDate,name,phoneNumber,job,status}:IUserTableList) => {
    return (<UserTableListTr>
        <UserTableTd>
            <UserTableCheckBox type="checkbox" />
        </UserTableTd>
        <UserTableTd>{idx+1}</UserTableTd>
        <UserTableTd>{signDate}</UserTableTd>
        <UserTableTd>{name}</UserTableTd>
        <UserTableTd>{phoneNumber}</UserTableTd>
        <UserTableTd>{job}</UserTableTd>
        <UserTableTd>{status}</UserTableTd>
        </UserTableListTr>       
    );
}
export default UserTableList;
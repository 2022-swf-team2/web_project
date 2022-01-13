import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IdeleteCheckList } from "../UserScreen";
import { UserTableTd } from "./UserTable";

interface IUserTableList {
    idx:number,
    signDate:string,
    name:string,
    phoneNumber:string,
    job:string,
    status:string,
    id:string,
    deleteCheckList:IdeleteCheckList[],
    setDeleteCheckList:Function
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
const UserTableList = ({idx,
    signDate,
    name,
    phoneNumber,
    job,
    status,
    id,
    deleteCheckList,
    setDeleteCheckList}:IUserTableList) => {
    const navigate = useNavigate();
    const checked = deleteCheckList.find((e)=>e.id===id)?.checked;
    const checkedIdx = deleteCheckList.findIndex((e)=>e.id===id);
    const deleteCheckChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDeleteCheckList([...deleteCheckList.slice(0,checkedIdx),{id,checked:e.target.checked},...deleteCheckList.slice(checkedIdx+1)]);
    }
    return (<UserTableListTr >
        <UserTableTd>
        <UserTableCheckBox type="checkbox" onChange={deleteCheckChangeHandler} checked={checked?checked : false} />
        </UserTableTd>
        <UserTableTd>{idx+1}</UserTableTd>
        <UserTableTd>{signDate}</UserTableTd>
        <UserTableTd style={{cursor:"pointer"}} onClick={()=>navigate(`${id}`)}>{name}</UserTableTd>
        <UserTableTd>{phoneNumber}</UserTableTd>
        <UserTableTd>{job}</UserTableTd>
        <UserTableTd>{status}</UserTableTd>
        </UserTableListTr>       
    );
}
export default UserTableList;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { deleteGatherListAtom } from "../../../atoms";
import {GatherTableTd} from './GatherTable';

interface IGatherTableList {
    idx:number,
    writeTime:string,
    openTime:string,
    endTime:string,
    hostName:string,
    over:boolean,
    id:string
}

const GatherTableListTr = styled.tr`
    border:1px solid black;
`;
const GatherTableCheckBox = styled.input`
    height: 20px;
    width: 20px;
`
const GatherTableList = ({idx,writeTime,openTime,endTime,hostName,over,id}:IGatherTableList) => {
    const navigate = useNavigate();
    const [deleteCheckList,setDeleteCheckList] = useRecoilState(deleteGatherListAtom);
    const checked = deleteCheckList.find((e)=>e.id===id)?.checked;
    const checkedIdx = deleteCheckList.findIndex((e)=>e.id===id);
    const changeHandler =(e:React.ChangeEvent<HTMLInputElement>) => {
        setDeleteCheckList([...deleteCheckList.slice(0,checkedIdx),{id,checked:e.target.checked},...deleteCheckList.slice(checkedIdx+1)]);
    }
    return (<GatherTableListTr >
        <GatherTableTd>
            <GatherTableCheckBox type="checkbox" onChange={changeHandler} checked={checked?checked:false}/>
        </GatherTableTd>
        <GatherTableTd>{idx+1}</GatherTableTd>
        <GatherTableTd>{writeTime}</GatherTableTd>
        <GatherTableTd >{`${openTime} ~ ${endTime} / `}</GatherTableTd>
        <GatherTableTd>{hostName}</GatherTableTd>
        <GatherTableTd>{over ? "진행 종료" : "진행 중"}</GatherTableTd>
        </GatherTableListTr>       
    );
}
export default GatherTableList;
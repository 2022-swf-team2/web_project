import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {GatherTableTd} from './GatherTable';

interface IGatherTableList {
    idx:number,
    writeTime:string,
    openTime:string,
    endTime:string,
    hostName:string,
    over:boolean,
}

const GatherTableListTr = styled.tr`
    border:1px solid black;
`;
const GatherTableCheckBox = styled.input`
    height: 20px;
    width: 20px;
`
const GatherTableList = ({idx,writeTime,openTime,endTime,hostName,over}:IGatherTableList) => {
    const navigate = useNavigate();
    return (<GatherTableListTr >
        <GatherTableTd>
            <GatherTableCheckBox type="checkbox" />
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
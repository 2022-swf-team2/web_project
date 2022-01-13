import styled from "styled-components";
import { IGathering } from "../../../models/gathering";

const StatusTab = styled.div<{isSelected:boolean}>`
    width: 8%;
    min-width:95px;
    height: 60px;
    background-color: ${props=>props.isSelected? props.theme.bgPinkColor :"white"} ;
    color:${props=>props.isSelected?"white":"black"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-weight:bold;
    cursor: pointer;
    user-select:none;
`;
const StatusContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    &>${StatusTab}:not(:last-child) {
        border-right: none;
    }
    margin:10px 0;
`;
interface IGatherStatusTab {
    currentStatus:string,
    setCurrentStatus:Function,
    gatheringNumber:{
        all:number;
        continue:number;
        finished:number;
    }
}
const GatherStatusTab = ({currentStatus,setCurrentStatus,gatheringNumber}:IGatherStatusTab) => {
    return (<StatusContainer>
        <StatusTab isSelected={currentStatus==='all'} onClick={()=>setCurrentStatus('all')}>{`전체 ${gatheringNumber.all}`}</StatusTab>
        <StatusTab isSelected={currentStatus==='continue'} onClick={()=>setCurrentStatus('continue')}>{`진행 중 ${gatheringNumber.continue}`}</StatusTab>
        <StatusTab isSelected={currentStatus==='finished'} onClick={()=>setCurrentStatus('finished')}>{`진행 종료 ${gatheringNumber.finished}`}</StatusTab>
        <StatusTab isSelected={false}></StatusTab>
    </StatusContainer>);
}
export default GatherStatusTab;
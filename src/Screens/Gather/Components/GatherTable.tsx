import { useState } from "react";
import styled from "styled-components";
import { IGathering } from "../../../models/gathering";
import UserTablePage from "../../../components/UserTablePage";
import GatherTableList from "./GatherTableList";
import { IdeleteCheckList } from "../../User/UserScreen";
const GatherTableWrapContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const GatherTableContainer = styled.table`
    width: 100%;
    text-align: center;
    font-size: 16px;
`;
const GatherTableTr = styled.tr`
    border: 1px solid black;
`;
export const GatherTableTd = styled.td`
    border : 1px solid black;
    padding: 2px;
    height: 10px;
    box-sizing:border-box;
`;
const GatherTableThead = styled.thead`
    background-color  : ${props => props.theme.bgBlueColor};
    font-weight: bold;
`;
const GatherTableTBody = styled.tbody``;

interface IGatherTable {
    gatherList:IGathering[],
}

const GatherTable = ({ gatherList }:IGatherTable) => {
    const pages: number[] = [];
    const [currentPage, setCurrentPage] = useState<number>(1);
    for (let i = 0; i <= ((gatherList.length - 1) / 10); i++) {
        pages.push(i + 1);
    }
    const pageGatherList = gatherList.slice((currentPage - 1) * 10, (currentPage) * 10);
    return (
        <GatherTableWrapContainer>
            <GatherTableContainer>
                <GatherTableThead>
                    <GatherTableTr>
                        <GatherTableTd style={{width:"7%"}}>비고</GatherTableTd>
                        <GatherTableTd style={{width:"7%"}}>번호</GatherTableTd>
                        <GatherTableTd style={{width:"20%"}}>모임 등록 일시</GatherTableTd>
                        <GatherTableTd style={{width:"45%"}}>모임 주최 일시 / 소요시간</GatherTableTd>
                        <GatherTableTd style={{width:"13%"}}>닉네임</GatherTableTd>
                        <GatherTableTd style={{width:"8%"}}>진행여부</GatherTableTd>
                    </GatherTableTr>
                </GatherTableThead>
                <GatherTableTBody>
                    {pageGatherList.map((gather,idx)=><GatherTableList 
                    key={idx}
                    idx={idx}
                    writeTime={ gather.hasOwnProperty("timeStamp") ? gather.timeStamp! : "정보 없음"}
                    openTime={gather.openTime}
                    endTime={gather.endTime}
                    hostName={gather.host.name}
                    over={gather.over}
                    id={gather.id}
                    />)
                    }
                </GatherTableTBody>
            </GatherTableContainer>
            <UserTablePage pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </GatherTableWrapContainer>
    )
}
export default GatherTable;
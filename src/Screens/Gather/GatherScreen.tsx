import WrapNavigationContainer from "../../components/WrapNavi";
import styled from "styled-components";
import SearchTable from "../../components/SearchTable";
import GatherTable from "./Components/GatherTable";
import GatherCategory from "./Components/GatherCategory";
import { useEffect, useState } from "react";
import GatherNumberTable from "./Components/GatherNumberTable";
import GatherStatusTab from "./Components/GatherStatusTab";
import { IGathering } from "../../models/gathering";
import { ExcelButton, IdeleteCheckList, UserTableButtons } from "../User/UserScreen";
import { DeleteButton } from "../../styles/Button";
import { GrDocumentExcel } from "react-icons/gr";
import xlsx from 'xlsx';
import { fetchGatherData } from "../../fetch";
import { useRecoilState } from "recoil";
import { gatheringListAtom,deleteGatherListAtom } from "../../atoms";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";

const GatherWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding:30px;
    box-sizing:border-box;
`;
const StatusButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;
const TitleText = styled.div`
    font-size:32px;
    font-weight:bold;
    margin-bottom: 10px;
`;
const GatherScreen = () => {
    const [gatherCategory,setGatherCategory] = useState("전체");
    const [currentStatus,setCurrentStatus] = useState('all');
    const [gatheringList,setGatheringList] = useRecoilState(gatheringListAtom);
    const [deleteCheckList,setDeleteCheckList] = useRecoilState(deleteGatherListAtom);
    const notOverGathering:IGathering[] = gatheringList.filter(e=>e.over===false);
    const overGathering:IGathering[] = gatheringList.filter(e=>e.over===true);
    const getCurrentGatherings=():IGathering[]=>{
        switch(currentStatus) {
            case 'all':
                return gatheringList;
            case 'continue':
                return notOverGathering;
            case 'finished':
                return overGathering;
            default:
                return gatheringList;
        }
    }
    const currentGatherings = getCurrentGatherings();
    const gatheringNumbers = {
        all:gatheringList.length,
        continue:notOverGathering.length,
        finished:overGathering.length,
    }
    const download = () => {
        const gatheringDataToExcel = [];
        for(var i =0;i<gatheringList.length;i++) {
            gatheringDataToExcel.push({
                ...gatheringList[i],
                host:gatheringList[i].host.name
            });
        }
        const ws = xlsx.utils.json_to_sheet(gatheringDataToExcel);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb,ws,"Sheet1");
        xlsx.writeFile(wb,"Gathering.xlsx");
    }
    const fetch = async()=>{
        const getGatherList = await fetchGatherData();
        const gatherDeleteList:IdeleteCheckList[] = [];
        getGatherList.forEach((e)=>{
            gatherDeleteList.push({
                id:e.id,
                checked:false
            });
        });
        setGatheringList(getGatherList);
        setDeleteCheckList(gatherDeleteList);
    }
    const deleteGatherHandler = async() => {
        let refresh:boolean = false;
        const filteredList:IdeleteCheckList[] = deleteCheckList.filter((e)=>e.checked===true);
        for(const gathering of filteredList){
                await deleteDoc(doc(db,"gathering",gathering.id));
                refresh=true;
        }
        console.log(refresh);   
        if(refresh) {
            console.log("리프레시");
            fetch();
        }
    }
    useEffect(()=>{
        fetch();
    },[]);
    return( <WrapNavigationContainer>
        {!gatheringList ? <span>Loading...</span>:
        <GatherWrapContainer>
            <TitleText>모임 관리</TitleText>
            <SearchTable searchPart={0} setList={()=>{}}/>
            <GatherCategory gatherCategory={gatherCategory} setGatherCategory={setGatherCategory}/>
            <GatherNumberTable allGatherList={gatheringList}/>
            <StatusButtonContainer>
            <GatherStatusTab currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} gatheringNumber={gatheringNumbers}/>
            <UserTableButtons>
                <ExcelButton onClick={download}>
                <GrDocumentExcel style={{marginRight:"20px",color:"green"}} size="32"/> 엑셀 다운
                </ExcelButton>
                <DeleteButton style={{width:"120px"}} onClick={()=>deleteGatherHandler()}>
                    삭제
                </DeleteButton>
            </UserTableButtons>
            </StatusButtonContainer>
            <GatherTable gatherList={currentGatherings}/>
        </GatherWrapContainer>}
    </WrapNavigationContainer>);
}
export default GatherScreen;
import WrapNavigationContainer from "../../components/WrapNavi"
import styled from "styled-components";
import UserTable from "./Components/UserTable";
import UserNumberTable from "./Components/UserNumberTable";
import SearchTable from "../../components/SearchTable";
import { DefaultButton, DeleteButton } from "../../styles/Button";
import { GrDocumentExcel } from "react-icons/gr";
import xlsx from 'xlsx';
import { IUserExcel } from "../../models/user";
import { useEffect, useState } from "react";
import { fetchUserData } from "../../fetch";
import { userListAtom } from "../../atoms";
import { useRecoilState } from "recoil";
import {  deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";

const UserWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
    box-sizing:border-box;
`
const UserTableWrapContainer = styled(UserWrapContainer)`
    width:100%;
    height:60%;
    padding:0px;
`;
const UserNumberTableButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
    margin : 10px 0;
`;
const UserContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`
export const UserTableButtons = styled.div`
    display:flex;
`;
const TitleText = styled.div`
    font-size:32px;
    font-weight:bold;
    margin-bottom:10px;
`
export const ExcelButton = styled(DefaultButton)`
     border:1px solid ${props=>props.theme.textColor};
`;
export interface IdeleteCheckList {
    id:string,
    checked:boolean,
}

const UserScreen = () => {
    const [userList,setUserList] = useRecoilState(userListAtom);
    const [deleteCheckList,setDeleteCheckList] = useState<IdeleteCheckList[]>([]);
    useEffect(()=>{  
        fetch(); 
    }
    ,[]);

    const hashTagToString = (hashtag:string[]):string =>{
        var str:string = "";
        for(var tag of hashtag) {
            console.log(`#${tag}`);
            str += `#${tag} `;
        }
        return str;
    }
    const download = () => {
        const userDataToExcel:IUserExcel[] = [];
        for(var i =0;i<userList.length;i++) {
            console.log("te");
            userDataToExcel.push({
                ...userList[i],
                userTagList:hashTagToString(userList[i].userTagList)
            });
        } 
        console.log(userDataToExcel.filter);
        const ws = xlsx.utils.json_to_sheet(userDataToExcel);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb,ws,"Sheet1");
        xlsx.writeFile(wb,"User.xlsx");
    }
    const fetch = async() => {
        const getUserList = await fetchUserData();
        const userDeleteList:IdeleteCheckList[] = [];
        getUserList.forEach((e)=>{
            userDeleteList.push({
                id:e.id,
                checked:false
            });     
        }
        );
        setUserList(getUserList);
        console.log(userDeleteList);
        setDeleteCheckList(userDeleteList);
    }     
    const deleteUserHanlder = async() => {
        let refresh:boolean = false;
        const filteredList:IdeleteCheckList[] = deleteCheckList.filter((e)=>e.checked===true);
        for(const user of filteredList){
                console.log(user);
                await deleteDoc(doc(db,"user",user.id));
                refresh=true;
        }
        console.log(refresh);
        if(refresh) {
            console.log("리프레시");
            fetch();
        }
    }

    return (
        <WrapNavigationContainer>
            {userList.length<1 ? <span>loading...</span>:
            <UserWrapContainer>
                <TitleText >유저 관리</TitleText>
                <UserContainer>
                    <SearchTable />
                    <UserTableWrapContainer>
                        <UserNumberTableButtonContainer>
                        <UserNumberTable userList={userList} />
                        <UserTableButtons>
                            <ExcelButton onClick={download}>
                            <GrDocumentExcel style={{marginRight:"20px",color:"green"}} size="32"/> 엑셀 다운
                            </ExcelButton>
                            <DeleteButton style={{width:"120px"}} onClick={()=>deleteUserHanlder()}>
                                삭제
                            </DeleteButton>
                        </UserTableButtons>
                        </UserNumberTableButtonContainer>
                        <UserTable userList={userList} deleteCheckList={deleteCheckList} setDeleteCheckList={setDeleteCheckList}/>
                    </UserTableWrapContainer>
                </UserContainer>
            </UserWrapContainer>}   
        </WrapNavigationContainer>
    )
}
export default UserScreen;
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userListAtom } from "../atoms";
import { fetchUserData } from "../fetch";
import { IUser } from "../models/user";
import { isDateTime } from "../utils/functions";
const SearchTableContainer = styled.form`
    display:grid;
    width: 100%;
    grid-template-columns: 1fr 3fr 1fr 3fr 1fr;
    grid-template-rows: repeat(2,80px);
    & > div:nth-child(1),&>div:nth-child(2) {
        border-bottom: none;
        border-right: none;
    }
    &>div:nth-child(3) {
        border-bottom:none;
    }
    &>div:nth-child(4),
    &>div:nth-child(5),
    &>div:nth-child(6),
    &>div:nth-child(7) {
        border-right: none;
    }
`;
const DefaultContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid black;
    font-weight: bold;
    font-size:20px;
    box-sizing:border-box;
    padding:5px;
    
`;
const LabelContainer = styled(DefaultContainer)`
    background-color: ${({ theme }) => theme.bgBlueColor};
`;
const ResetButtonContainer = styled(DefaultContainer)`
    background-color: ${({ theme }) => theme.bgGreyColor};
    user-select:none;
    cursor:pointer;
`;
const SearchButtonContainer = styled(DefaultContainer)`
    background-color: ${({ theme }) => theme.bgYellowColor2};
    user-select:none;
    cursor:pointer;
`;
const DateInputContainer = styled(DefaultContainer)`
    grid-column: 2/5;
    display:flex;
    justify-content    : space-around ;
`;
const SearchInputBox = styled.input`
 padding: 20px 20px;
    width:40%;
    text-align:center;
    font-size:20px;
`;
const NickNameInputBox = styled(SearchInputBox)`
    width:90%;
`;
interface IForm{
    date_start:string,
    date_end:string,
    name:string,
    phone:string,
}
const SearchTable = ({searchPart,setList}:{searchPart:number,setList:Function}) => {
    const {register,getValues,setValue} = useForm<IForm>();
    const userList = useRecoilValue(userListAtom);
    const SearchUser = async() => {
        let getUserCollection:IUser[] = await fetchUserData();
        if(!isDateTime(getValues("date_start"))||!isDateTime(getValues("date_end"))) {
                alert("날짜를 똑바로 입력해주세요!");
        }
        if(getValues("date_start")!=='') {
            getUserCollection = getUserCollection.filter((e)=>{
                const signDate = new Date(e.timeStamp);
                const inputStartDate = new Date(getValues("date_start"));
                return signDate>=inputStartDate;
            });
        }
        if(getValues("date_end")!=='') {
            getUserCollection = getUserCollection.filter((e)=>{
                const signDate = new Date(e.timeStamp);
                const inputEndDate = new Date(getValues("date_end"));
                inputEndDate.setDate(inputEndDate.getDate()+1);
                return signDate<=inputEndDate;
            });
        }
        if(getValues("name")!=='') {
            getUserCollection = getUserCollection.filter((e)=>
                e.name.includes(getValues("name"))
            );
        }
        if(getValues("phone")!=='') {
            getUserCollection = getUserCollection.filter((e)=>
                e.phoneNumber.includes(getValues("phone"))
            );
        }
        console.log(getUserCollection);
        setList(getUserCollection);
    }
    const resetTable = () => {
        setValue("date_start","");
        setValue("date_end","");
        setValue("name","");
        setValue("phone","");
        setList(userList);
    }
    return (
        <SearchTableContainer>
            <LabelContainer>가입 일시</LabelContainer>
            <DateInputContainer>
                <SearchInputBox type="text" placeholder="YYYY.MM.DD" {...register("date_start")}/>
                <span style={{ color: "grey", fontSize: "20px" }}>~</span>
                <SearchInputBox type="text" placeholder="YYYY.MM.DD" {...register("date_end")}/>
            </DateInputContainer>
            <ResetButtonContainer onClick={()=>resetTable()}>초기화</ResetButtonContainer>
            <LabelContainer>닉네임</LabelContainer>
            <DefaultContainer>
                <NickNameInputBox type="text" {...register("name",{
                    maxLength:6
                })}/>
            </DefaultContainer>
            <LabelContainer>휴대폰번호</LabelContainer>
            <DefaultContainer>
                <NickNameInputBox type="text" {...register("phone")} />
            </DefaultContainer>
            <SearchButtonContainer onClick={()=>SearchUser()}>검색</SearchButtonContainer>
        </SearchTableContainer>);
}
export default SearchTable;
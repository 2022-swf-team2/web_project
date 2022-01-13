import { TableContainer, TableEnabledTd, TableTBody, TableTd, TableTitleTd, TableTr } from "../../../styles/Table";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { DeleteButton, ModifiedButton } from "../../../styles/Button";
import { IUser } from "../../../models/user";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import { fetchUserData } from "../../../fetch";
import { useNavigate } from "react-router-dom";
import { hashTagToString, StringtoTagList } from "../../../utils/functions";
const InformTableTitleTd = styled(TableTitleTd)`
    padding:10px;
    width:10%;
    font-weight:bold;
    font-size:18px;
`;
const InformTableEnabledTd = styled(TableEnabledTd)`
    padding:10px;
`;
const InformTableTd = styled(TableTd)`
    padding:10px;
`;
const InformInputBox = styled.input`
    all:unset;
    width:100%;
    height:100%;
`
const ButtonsContainer = styled.div`
    display: flex;
    margin:15px 0px;

`;


interface IUserForm {
    nickname: string,
    phone: string,
    job: string,
    hashtag: string,
    instagram: string,
    kakao: string,
};
const UserInformTable = ({ currentUser, currentUserIdx ,modifiedImage}: { currentUser: IUser, currentUserIdx: number,modifiedImage:Function }) => {
    const navigate = useNavigate();
    const { register, getValues } = useForm<IUserForm>({
        defaultValues: {
            nickname: currentUser.name,
            phone: currentUser.phoneNumber,
            job: currentUser.job,
            hashtag: hashTagToString(currentUser.userTagList),
            instagram: currentUser.instagram,
            kakao: currentUser.kakaoLink

        }
    });
    const handleModified = async () => {
        const values: string[] = getValues(["nickname", "phone", "job", "hashtag", "instagram", "kakao"]);
        await modifiedImage();
        await updateDoc(doc(db, 'user', currentUser.id), {
            name: values[0],
            phoneNumber: values[1],
            job: values[2],
            userTagList:StringtoTagList(values[3]),
            instagram: values[4],
            kakao: values[5],
        }).then(()=>{
            navigate("/user");
        });
    }
    const handleDeleteUser = async() => {
        await deleteDoc(doc(db,"user",currentUser.id)).then(()=>
            navigate("/user")
        );
    }
    return (
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <TableContainer style={{ width: "80%" }}>
                <TableTBody>
                    <TableTr style={{ width: "100%" }}>
                        <InformTableTitleTd>번호</InformTableTitleTd>
                        <InformTableEnabledTd>{currentUserIdx}</InformTableEnabledTd>
                        <InformTableTitleTd>가입일시</InformTableTitleTd>
                        <InformTableEnabledTd>{currentUser.timeStamp}</InformTableEnabledTd>
                        <InformTableTitleTd>상태</InformTableTitleTd>
                        <InformTableEnabledTd>"일반"</InformTableEnabledTd>
                    </TableTr>

                    <TableTr>
                        <InformTableTitleTd>닉네임</InformTableTitleTd>
                        <InformTableTd><InformInputBox {...register("nickname")} /></InformTableTd>
                        <InformTableTitleTd>휴대폰번호</InformTableTitleTd>
                        <InformTableTd><InformInputBox {...register("phone")} /></InformTableTd>
                        <InformTableTitleTd>신상정보</InformTableTitleTd>
                        <InformTableTd><InformInputBox {...register("job")} /></InformTableTd>
                    </TableTr>
                    <TableTr>
                        <InformTableTitleTd>소개 해시태그</InformTableTitleTd>
                        <InformTableTd colSpan={5}><InformInputBox {...register("hashtag")} /></InformTableTd>
                    </TableTr>
                    <TableTr>
                        <InformTableTitleTd>인스타그램</InformTableTitleTd>
                        <InformTableTd colSpan={5}><InformInputBox {...register("instagram")} /></InformTableTd>
                    </TableTr>
                    <TableTr>
                        <InformTableTitleTd>카카오톡 링크</InformTableTitleTd>
                        <InformTableTd colSpan={5}><InformInputBox {...register("kakao")} /></InformTableTd>
                    </TableTr>
                </TableTBody>
            </TableContainer>
            <ButtonsContainer>
                <DeleteButton style={{ marginRight: "10px" }} onClick={()=>{handleDeleteUser();}}>
                    계정 삭제
                </DeleteButton>

                <ModifiedButton onClick={() => { handleModified(); }}>
                    수정하기
                </ModifiedButton>
            </ButtonsContainer>
        </form>
    );
}
export default UserInformTable;
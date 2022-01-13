import WrapNavigationContainer from "../../components/WrapNavi";
import UserInformPopularTable from "./Components/UserInformPopularTable";
import UserInformTable from "./Components/UserInformTable";
import styled from "styled-components";
import UserInformImage from "./Components/UserInformImage";
import { useLocation } from "react-router-dom";
import { IUser } from "../../models/user";
import { useRecoilValue } from "recoil";
import { userListAtom } from "../../atoms";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, firestorageService } from "../../Firebase";
import { doc, updateDoc } from "firebase/firestore";

const UserDetailScreenWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width:940px;
    min-height: 350pxyty;
`
const UserDetailScreenTopWrapper = styled.div`
    width:80%;
    display:flex;
    align-items: flex-end;
`
const UserDetailScreen = () => {
    const { pathname } = useLocation();
    const userId = pathname.split('/')[2];
    const userList = useRecoilValue(userListAtom);
    const currentUser: (IUser | undefined) = userList.find((e) => e.id === userId);
    const currentUserIdx: (number | undefined) = userList.findIndex((e) => e.id === userId) + 1;

    const [profileImageFile, setProfileImageFile] = useState<File>();
    const modifiedImage = async () => {
        if (profileImageFile === undefined) {
        }
        else if (profileImageFile === null) {
            console.log("nofile")
            await updateDoc(doc(db, "user", userId), {
                imageUrl: "https://www.pinclipart.com/picdir/big/169-1695846_jane-no-one-icon-clipart.png"
            });
        } else {
            await uploadBytes(ref(firestorageService, `images/${userId}/profileimage`), profileImageFile as Blob);
            const fileURL = await getDownloadURL(ref(firestorageService, `images/${userId}/profileimage`));
            await updateDoc(doc(db, "user", userId), {
                imageUrl: fileURL,
            });
        }
    }
    return (
        <WrapNavigationContainer>
            {currentUser ?
                <UserDetailScreenWrapper>
                    <UserDetailScreenTopWrapper>
                        <UserInformImage userImage={currentUser.imageUrl} setProfileImageFile={setProfileImageFile} />
                        <UserInformPopularTable />
                    </UserDetailScreenTopWrapper>
                    <div style={{ height: "5px" }}></div>
                    <UserInformTable currentUser={currentUser} currentUserIdx={currentUserIdx} modifiedImage={modifiedImage} />
                </UserDetailScreenWrapper> : <span>No User</span>}
        </WrapNavigationContainer>
    );
}
export default UserDetailScreen;
import React, { useState } from "react";
import styled from "styled-components";
import { DeleteButton } from "../../../styles/Button";
const ProfileImageEditContainer = styled.div`
    display:flex;
    align-items:flex-end;
    width: 100%;
`;
const ProfileImageContainer = styled.div`
    position:relative;
    width: 20%;
    min-width:120px;
`;
const ProfileImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius  : 5px;
`;
const ProfileImageWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom:100%;
`
const ProfileImageEditButton = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    border-bottom-left-radius : 5px;
    border-bottom-right-radius:5px;
    position: absolute;
    height:20px;
    bottom:1px;
    left:0;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:14px;
    cursor:pointer;
    user-select:none;

`;
const UserInformImage = ({userImage,setProfileImageFile}:{userImage:string,setProfileImageFile:Function}) => {
    const [previewImage,setPreviewImage] = useState<string>(userImage);
    const onFileChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0]:null;
        const reader = new FileReader();
        if(selectedFile!=null) {
        reader.readAsDataURL(selectedFile);
        }
        reader.onloadend = () => {
            setPreviewImage(reader.result as string);
            setProfileImageFile(selectedFile);
        }
        
    }
    const deleteProfileImage = () => {
        setPreviewImage("https://www.pinclipart.com/picdir/big/169-1695846_jane-no-one-icon-clipart.png");
        setProfileImageFile(null);
    }
    return (
        <ProfileImageEditContainer>
        <ProfileImageContainer style={{marginRight:"10px"}}>
            <ProfileImageWrapper>
            {previewImage ? <ProfileImage src={previewImage}/> : <span>No Image :)</span>}
            </ProfileImageWrapper>
            <label htmlFor="profile_img_input">
            <ProfileImageEditButton>
                편집
            </ProfileImageEditButton>
            </label>
            <input 
            type="file"
            id="profile_img_input" 
            style={{display:'none'}}
            onChange={onFileChange}
            accept="image/jpeg,image/png"
            />
        </ProfileImageContainer>
        <DeleteButton style={{width:"100px",height:"40px",fontSize:"14px"}} onClick={deleteProfileImage}>
            이미지 삭제
        </DeleteButton>
        </ProfileImageEditContainer>
    )
}
export default UserInformImage;
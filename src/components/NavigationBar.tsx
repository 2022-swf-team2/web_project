import styled from "styled-components";
import {FaUser}from 'react-icons/fa';
import {BsArrowLeft,BsArrowRight,BsCalendar} from 'react-icons/bs';
import {GrGroup} from 'react-icons/gr';
import { useRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { naviState } from "../atoms";
const NavigationContainer = styled.div<{opened:boolean}>`
    position:relative;
    height: 100vh;
    width: ${props=>props.opened ? '240px' : '50px'};
    border-right: 1px solid ${props=>props.theme.bgGreyColor};
    color:${props=>props.theme.textColor};
    @media only screen and (max-height:430px) {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    transition: 0.3s width ease-in-out;

`;
const NavigationTitleContainer = styled.div<{opened:boolean}>`
    width: 100%;
    box-sizing:border-box;
    height: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom:80px;
    cursor: pointer;
    user-select:none;
    @media only screen and (max-height:430px) {
        margin-bottom:0px;
    }
`;
const AccentText = styled.span`
    font-size:24px;
    font-weight:bold;
`;
const NormalText = styled.span`
    font-size:24px;
`;
const NavigationButtons = styled.div``;
const NavigationButton = styled.div<{selected:boolean}>`
    background-color: ${(props)=>props.selected&&props.theme.bgBlueColor};
    width: 100%;
    height: 80px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select:none;
    transition: 0.1s all ease-in;
    cursor: pointer;
    &:hover{
        background-color:${({theme})=>theme.bgBlueColor};
    }
`;
const NavigationBarFoldButton = styled.div`
    background-color: ${({theme})=>theme.bgYellowColor2};
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right:0px;
    bottom:0px;
`;

const NavigationBar = () => {
    const [open,setOpen] = useRecoilState(naviState);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const handleClick = (dest:string) => {
        navigate(dest);
    }
    return (<NavigationContainer opened={open}>
        <NavigationTitleContainer opened={open} onClick={()=>handleClick("/home")}>
            <AccentText style={{color:"#9CD5FF",fontSize:"36px"}}>{open ? 'COMMON' : 'C'}</AccentText>
            <AccentText style={{marginBottom:'32px',fontSize:"24px"}}>{open ? '커먼' : ''}</AccentText>
            <NormalText style={{fontSize:"24px"}}>{open ? '관리자 ADMIN' : ''}</NormalText>
        </NavigationTitleContainer>
        <NavigationButtons>
        <NavigationButton onClick={()=>handleClick("/user")} selected={pathname.split('/')[1]==="user"}>
        {open ? '회원 관리' : <FaUser size="24"/>}
        </NavigationButton>
        <NavigationButton onClick={()=>handleClick("/gather")} selected={pathname==="/gather"}>
            {open ? '모임 관리' : <GrGroup size="24"/> }
        </NavigationButton>
        <NavigationButton selected={pathname==="/event"}>
        {open ? '이벤트 관리' : <BsCalendar size="24"/>}
        </NavigationButton>
        </NavigationButtons>

        <NavigationBarFoldButton onClick={()=>setOpen((prev)=>!prev)}>
           {open ?  <BsArrowLeft size="32" color="white"/> :<BsArrowRight size="32" color="white"/> }
        </NavigationBarFoldButton>
    </NavigationContainer>);
}
export default NavigationBar;
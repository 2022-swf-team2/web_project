import WrapNavigationContainer from "../../components/WrapNavi"
import styled from "styled-components";
import UserTable from "./Components/UserTable";
import { userData } from "../../data";
import UserNumberTable from "./Components/UserNumberTable";

const UserContainer = styled.div`
    box-sizing:border-box;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
`
const UserScreen = () => {
    
    return (
       <WrapNavigationContainer>
           <UserContainer>
            <UserNumberTable/>
           <UserTable userList={userData}/>
           </UserContainer>
        </WrapNavigationContainer>
    )
}
export default UserScreen;
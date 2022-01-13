import styled, { keyframes } from "styled-components";
import WrapNavigationContainer from "../../components/WrapNavi";
const logoFade = keyframes`
    from {
        opacity:0;

    } 
    to {
        opacity:1;
    }
`;
const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation:${logoFade} 2s 0s ease-in-out;
`;
const MainScreen = () => {
    return (<WrapNavigationContainer>
        <MainContainer>
            <span style={{fontSize:'48px',fontWeight:'bold',color:"#9CD5FF"}}>COMMON</span>
            <span style={{fontSize:'32px',fontWeight:'bold'}}>커먼</span>
        </MainContainer>
    </WrapNavigationContainer>);
}
export default MainScreen;
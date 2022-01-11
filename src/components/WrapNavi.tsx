import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
const WrapNavi = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: stretch;
`;
const WrapContent = styled.div`
    flex:1;
`;
const WrapNavigationContainer = ({children}:{children:React.ReactNode}) => {
    return (
        <WrapNavi>
        <NavigationBar/>
        <WrapContent>
        {children}
        </WrapContent>
    </WrapNavi>);
}
export default WrapNavigationContainer;
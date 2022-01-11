import ProfileCard from "./Components/ProfileCard";

import { userData } from "../../data";
import styled from "styled-components";
const Title = styled.span`
    font-size: 24px;
    color:#3b3b3b;
    padding: 0px 0px 10px 0px;
`;
const Container = styled.div`
    box-sizing:border-box;
    height: 100vh;
    width: 100%;
    padding:10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const TestContainer = () => {
    return (<>
    <Container>
        <Title>유저 목록</Title>
        {userData.map((e)=><ProfileCard image={e.imageURL} name={e.name} job={e.job} hashtag={e.userTagList}/>)}
        </Container>
        
    </>);
}
export default TestContainer;
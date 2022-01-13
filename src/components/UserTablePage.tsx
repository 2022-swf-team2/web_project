import styled from 'styled-components';
interface IUserTablePage {
    pages:number[],
    currentPage:number,
    setCurrentPage:Function
}
const PageContainer = styled.div`
    display  : flex;
    width: 100%;
    justify-content: center;
    margin : 10px 0px;
    
`;
const PageNumber = styled.div<{isCurrent:boolean}>`
    color:${props=>props.isCurrent ? props=> props.theme.textColor:props=>props.theme.bgGreyColor};
    margin:0px 3px;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
`;
const UserTablePage = ({pages,currentPage,setCurrentPage}:IUserTablePage) => {
    return (<PageContainer>{pages.map((e,idx)=><PageNumber onClick={()=>{setCurrentPage(e)} } key={idx} isCurrent={e===currentPage}>{e}</PageNumber>)}</PageContainer>)
}
export default UserTablePage;
import { TableThead, TableTitleTd, TableContainer, TableTBody, TableEnabledTd ,TableTr} from "../../../styles/Table";
import styled from "styled-components";
const PopularTableTitleTd = styled(TableTitleTd)`
    padding:10px;
    width:10%;
`;

const PopularTableTd = styled(TableEnabledTd)`
    padding:10px;
`;
const UserInformPopularTable = () => {
    return (
        <TableContainer style={{width:"30%"}}>
        <TableThead>
            <TableTr>
            <PopularTableTitleTd>팔로워</PopularTableTitleTd>
            <PopularTableTitleTd>게스트 참여</PopularTableTitleTd>
            <PopularTableTitleTd>호스트 주최</PopularTableTitleTd>
            </TableTr>
        </TableThead>
        <TableTBody>
            <TableTr>
            <PopularTableTd>15</PopularTableTd>
            <PopularTableTd>40</PopularTableTd>
            <PopularTableTd>400</PopularTableTd>
            </TableTr>
        </TableTBody>
        </TableContainer>
    );
}
export default UserInformPopularTable;
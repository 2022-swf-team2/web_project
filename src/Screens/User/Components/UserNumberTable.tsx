import { TableContainer, TableTd, TableThead } from "../../../styles/Table"

const UserNumberTable = () =>{
    return (
        <TableContainer>
            <TableThead>
                <TableTd>전체 회원수</TableTd>
                <TableTd>오늘</TableTd>
                <TableTd>이번주</TableTd>
                <TableTd>이번달</TableTd>
                <TableTd>출첵</TableTd>
            </TableThead>
        </TableContainer>
    )
}
export default UserNumberTable;
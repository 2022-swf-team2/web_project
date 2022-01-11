import styled from "styled-components";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
interface test {
    name:string,
    value:string

}
const BigContaienr = styled.div`
    height: 100%;
    width:100%;
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    height: 100%;
    width:100%;
    padding:10px;
    box-sizing:border-box;
    display: flex;
    flex-direction:column;
    max-width: 400px;
`;
const ListContainer = styled.div<{isList:boolean}>`
    width:100%;
    display:flex;
    flex-direction: ${props => props.isList && 'column'};
    justify-content: center;
    align-items: center;
    border:1px solid black;
    padding:10px;
    box-sizing:border-box;
`;
const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #212121;
    color:white;
    width: 100px;
    text-align: center;
    padding:10px;
    margin-bottom:5px;  
`;
const InputText = styled.input`
  padding  :5px ;
  margin-bottom: 5px;
`;
const Title = styled.span`
  font-size:24px;
  font-weight:bold;
  margin-bottom:10px;
`;
const PageButton = styled.button`
    all:unset;
    padding:5px 10px;
    cursor:pointer;
    background-color: #b3b3b3;
    color: #3b3b3b;
    border-radius:5px;
`;
const HomeContainer = () => {
    const [writing,setWriting] = useState<test[]>();
    const [page,setPage] = useState([1]);
    const [nowPage,setNowPage] = useState<number>(1);
    const {register,handleSubmit} = useForm<{name:string,value:string}>();
    const onClickHandler = ({name,value}:{name:string,value:string}) => {
        console.log(name,value);
        setWriting(!writing ?[{name,value}] : [...writing,{name,value}]);
        if(writing && writing.length%5===0) {
            setPage([...page,writing.length/5+1]);
        }
    }
    const pageChange = (e:number) => {
        setNowPage(e);
    }
    return (
        <BigContaienr>
        <Container>
            <InputText {...register("name")}type="text"/>
            <InputText {...register("value")}type="text"/>
            <button onClick={handleSubmit(onClickHandler)} style={{marginBottom:'5px'}}>생성</button>
            <ListContainer isList={true}>
                {
                writing?.slice((nowPage-1)*5,(nowPage)*5).map((e)=>
                <MainDiv>
                    <Title>{e.name}</Title>
                    <span>{e.value}</span>
                </MainDiv>)
                }
            </ListContainer>
            <ListContainer isList={false}>
                {page?.map((e)=>
                <PageButton onClick={()=>pageChange(e)}>{e}</PageButton>
                )}
            </ListContainer>
        </Container>
        </BigContaienr>
    );
}
export default HomeContainer;
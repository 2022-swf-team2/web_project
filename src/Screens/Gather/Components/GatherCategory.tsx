import styled from "styled-components";
import { gatheringCategory } from "../../../models/gathering";
const CategoryTab = styled.div<{isSelected:boolean}>`
    width: 8%;
    min-width:60px;
    height: 40px;
    background-color: ${props=>props.isSelected? props.theme.bgPinkColor :"white"} ;
    color:${props=>props.isSelected?"white":"black"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-weight:bold;
    cursor: pointer;
    user-select:none;
`
const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    &>${CategoryTab}:not(:last-child) {
        border-right: none;
    }
    margin:10px 0;
`;
interface IGatherCategory {
    gatherCategory:string,
    setGatherCategory:Function
}
const GatherCategory = ({gatherCategory,setGatherCategory}:IGatherCategory) => {
    return (
        <CategoryContainer>
            <CategoryTab isSelected={gatherCategory==='전체'} onClick={()=>setGatherCategory("전체")}>전체</CategoryTab>
            {gatheringCategory.map((category,idx)=><CategoryTab key={idx} isSelected={gatherCategory===category} onClick={()=>setGatherCategory(category)}>{category}</CategoryTab>)}
        </CategoryContainer>
    );
}
export default GatherCategory;
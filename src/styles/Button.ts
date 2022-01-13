import styled from "styled-components";
export const DefaultButton = styled.div`
    width:200px;
    height: 60px;
    display:flex;
    justify-content: center;
    align-items:center;
    user-select:none;
    font-size:18px;
    font-weight:bold;
    cursor: pointer;
`;
export const DeleteButton = styled(DefaultButton)`
    border: 1px solid ${props=>props.theme.bgRedColor};
    color:${props=>props.theme.bgRedColor};
`;
export const ModifiedButton = styled(DefaultButton)`
    border: 1px solid ${props=>props.theme.textColor};
    background-color: ${props=>props.theme.bgYellowColor2};
    color:${props=>props.theme.textColor};
`;

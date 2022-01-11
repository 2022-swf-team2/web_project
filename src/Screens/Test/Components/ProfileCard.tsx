import styled from "styled-components";



const AccentText = styled.span`
    font-size:18px;
    color:${props=>props.theme.textColor};
    font-weight:bold;
`;
const ContextText = styled.span`
    font-size:16px;
    color:${props=>props.theme.textColor};
`;
const Divider = styled.span`
    font-size:16px;
    color:${props=>props.theme.textColor};
    margin: 0 3px;
`;
const ProfileCardContainer = styled.div`
    height: 100px;
    width:360px;
    //border:solid 1px black;
    padding:10px;
    display:flex;
    justify-content: space-between;
`;
const ProfileCardImage = styled.img`
  border-radius  : 5px;
  width: 100px;
  height: 100px;

`;
const PrfoileCardTextContainer = styled.div`
  display  : flex;
  width: 70%;
  flex-direction: column;
  justify-content: flex-end;
`;
const PrfoileCardNameContainer = styled.div`
  display  : flex;
  width: 100%;
    align-items: center;
    margin-bottom: 3px;
`;
interface ICard {
    name:string,
    image:string,
    job:string,
    hashtag:string[]
}
const ProfileCard = ({name,image,job,hashtag}:ICard) => {
    const hashTagToString = (hashtag:string[]):string =>{
        var str:string = "";
        for(var tag of hashtag) {
            console.log(`#${tag}`);
            str += `#${tag} `;
        }
        return str;
    }

    return (
        <ProfileCardContainer>
            <ProfileCardImage src={image}/>
            <PrfoileCardTextContainer>
                <PrfoileCardNameContainer>
                    <AccentText>{name}</AccentText>
                    <Divider>|</Divider>
                    <ContextText>{job}</ContextText>
                </PrfoileCardNameContainer>
                <ContextText>{hashTagToString(hashtag)}</ContextText>
            </PrfoileCardTextContainer>
        </ProfileCardContainer>
  );
}
export default ProfileCard;
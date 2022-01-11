import { IGathering } from "./gathering";
export interface IUser {
    id:string,
    signDate:string,
    imageURL:string,
    phoneNumber:string,
    name:string,
    university:string,
    job:string,
    kakaoLink:string,
    instagram:string,
    userTagList:string[],
    applyGatheringList:IGathering[],
    openGatheringList:IGathering[],
    likeGathering:IGathering[],
    likeUser:IUser[]
}

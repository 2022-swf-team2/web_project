import { IUser } from "./user";
export interface IGathering {
    id: string,
    host: IHost,
    over: boolean,
    title: string,
    category: string,
    participant: number,
    capacity: number,
    timeStamp?: string,
    openTime: string,
    endTime: string,
    location: string,
    loactionDetail: string,
    hostMessage: string,
    tagList: string[],
    previousImageList: string[],
    applyList: IUser[],
    approvalList: IUser[],
    cancelList: IUser[],
}
interface IHost {
    imageURL:string,
    job:string,
    name:string,
    userId:string,
    userTagList:string[],
}
export const gatheringCategory:string[] = [
    '스터디','공모전','운동','베이킹','카페','음주','공예','음악','여행'
];
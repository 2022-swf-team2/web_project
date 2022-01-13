import { atom } from "recoil"
import { IGathering } from "./models/gathering";
import { IUser } from "./models/user";
export const naviState = atom<boolean>({
    key:"navi",
    default:false,
});

export const gatheringListAtom = atom<IGathering[]>({
    key:"gathering",
    default:[],
});
export const userListAtom = atom<IUser[]>({
    key:"user",
    default:[],
});
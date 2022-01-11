import { atom } from "recoil"
export const naviState = atom<boolean>({
    key:"navi",
    default:false,
});
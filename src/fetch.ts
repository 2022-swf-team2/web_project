import { db } from "./Firebase";
import { collection ,getDocs, orderBy, query} from "firebase/firestore";
import { IGathering } from "./models/gathering";
import { IUser } from "./models/user";

export const fetchGatherData = async():Promise<IGathering[]> => {
    const gatherList:IGathering[] = [];
    const querySnapshot = await getDocs(collection(db,"gathering"));
    querySnapshot.forEach((doc)=>{
        console.log(doc.id, "=>",doc.data());
        gatherList.push({
            ...doc.data() as IGathering,
            id:doc.id,
        });
    });
    return gatherList;

}
export const fetchUserData = async():Promise<IUser[]> => {
    const userList:IUser[] = [];
    const querySnapshot = await getDocs(query(collection(db,"user"),orderBy("timeStamp")));
    querySnapshot.forEach((doc)=>{
        console.log(doc.id, "=>",doc.data());
        userList.push({
            ...doc.data() as IUser,
            id:doc.id,
        });
    });
    return userList;

}
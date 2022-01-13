export const isDateTime = (inputDate:string):boolean => {
    var re = /[0-9]{4}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])/;
    return inputDate === '' || re.test(inputDate) ;
}
export const hashTagToString = (hashtag: string[]): string => {
    var str: string = "";
    for (var tag of hashtag) {
        console.log(`#${tag}`);
        str += `#${tag} `;
    }
    return str;
}
export const StringtoTagList = (hashtag:string):string[] => {
    const ary = hashtag.split('#');
    ary.splice(0,1);
    const newArray=[];
    for(var str of ary) {
        newArray.push(str.trim());
    }
    return newArray;
}
import { convertedNumber } from "@/contents/bengali";

export const convertNumber = (numEn) => {
    let convertedNum = "";
    String(numEn).split("")?.map((num) => {
        convertedNum += convertedNumber[num];
    })
    return convertedNum;
}
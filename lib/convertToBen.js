import { convertedNumber } from "@/contents/bengali";

export const convertNumber = (numEn) => {
  let convertedNum = "";
  String(numEn)
    .split("")
    ?.map((num) => {
      if (num !== "-") {
        convertedNum += convertedNumber[num];
      } else {
        convertedNum += num;
      }
    });
  return convertedNum;
};

export const convertDate = (date) => {
  let year = "";
  let month = "";
  let day = "";
  let newDate = "";
  let dateLocalFormat = date?.split("T")[0];
  String(dateLocalFormat)
    .split("-")
    ?.map((currDate, id) => {
      if (id === 0) {
        String(currDate)
          .split("")
          ?.map((item) => {
            year += convertedNumber[item];
          });
      }
      if (id === 1) {
        String(currDate)
          .split("")
          ?.map((item) => {
            month += convertedNumber[item];
          });
      }
      if (id === 2) {
        String(currDate)
          .split("")
          ?.map((item) => {
            day += convertedNumber[item];
          });
      }
    });
  newDate = day + "/" + month + "/" + year;
  return newDate;
};

export const convertRole = (role) => {
  const roles = {
    SUPERADMIN: "সুপারঅ্যাডমিন",
    MANAGER: "ম্যানেজার",
    SHOPKEEPER: "শপ কিপার",
    USER : "ইউসার",
  }
  return roles[role];
}

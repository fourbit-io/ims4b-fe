import { convertedNumber } from "../contents/bengali";

export const convertDate = (date) => {
  let year = "";
  let month = "";
  let day = "";
  let newDate = "";
  let dateLocalFormat = date?.split('T')[0];
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
  newDate = day + "-" + month + "-" + year;
  return newDate;
};

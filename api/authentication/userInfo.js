export const userInfo = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("info")) || "";
  }
  return false;
};

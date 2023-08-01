export const authAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token") || null;
  }
  return false;
};

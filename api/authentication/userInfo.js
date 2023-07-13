export const userInfo = () => {
    if (typeof window !== 'undefined') {
      return JSON.parse(sessionStorage.getItem('info')) || "";
    }
    return false;
  };
export const authAccessToken = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('access_token') || null;
    }
    return false;
  };
export const useGetUserInfo = ()=>{
    const{name , profilePhoto , userID , isAuth } = JSON.parse(localStorage.getItem("auth")
    ) || {};
    
    // console.log("this us userID",userID);
    return {name , profilePhoto , userID , isAuth};
};
import{auth , provider} from "../../config/firebase-config"
import {signInWithPopup} from 'firebase/auth'
import { useNavigate , Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css"

export const Auth = () => {
   const navigate = useNavigate ();
   const {isAuth} = useGetUserInfo();
    

   const signInWithGoogle= async() =>{
     const results = await signInWithPopup(auth , provider);
   //   console.log(results);
     const authInfo ={
      userID:results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true, 
     };
     localStorage.setItem("auth",JSON.stringify(authInfo));
   //   console.log(authInfo);
     navigate("/expense_tracker")
   };
   
   if(isAuth){
    return <Navigate to="/expense_tracker"/>
   }

   return (
      <div  className="login-page" >
      <p>Sign in with google to continue </p>
      {/* <button className="email-password"placeholder="Email"></button>
      <button className="email-password" placeholder="Password"></button>
      <button className="login-btn">Login</button> */}
      <button className="login-with-google-btn" onClick={signInWithGoogle} >Sign In With Google</button>
   </div> 
   );
}
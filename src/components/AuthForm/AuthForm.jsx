import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import { Navigate, Route, Routes } from "react-router-dom"
function AuthForm(){

    const [haveAccount, setHaveAccount] = React.useState(true)
    
    function togglePage(){
        setHaveAccount(prevState => !prevState)
          
    }
    return(
        <>  
       
            {haveAccount ? <Login togglePage = {togglePage}/> : <SignUp togglePage = {togglePage}/>}
        
        </>
    )
}

export default AuthForm
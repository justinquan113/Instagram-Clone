import React from "react"
import { useNavigate } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

function Login(props){
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState({
        email: "",
        password: ""
    });

    const {handleLogin, loading} = useLogin()
   

    return(
        <div className="login-page">
            <div>
                <div className="user-info"> 
                    <h1 className="instagram">Instagram</h1>                          
                    <input
                        value={userInfo.email}  
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value} )} 
                        type="text" 
                        placeholder="Phone number, username, or email">
                    </input>
                    <input 
                        value={userInfo.password} 
                        onChange={(e) => setUserInfo({...userInfo, password: e.target.value} )} 
                        type="password" 
                        placeholder="Password">
                    </input>                   
                    <button onClick={() => handleLogin(userInfo)} className="submit-btn" >{loading ? "Logging in..." : "Log in"}</button>                
                </div>
                <div className="signup">Dont have an account? <a onClick={props.togglePage} >Sign Up</a></div>
            </div>

        </div>

    )
}


export default Login
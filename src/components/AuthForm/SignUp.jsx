import { useNavigate } from "react-router-dom"
import React from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"
function SignUp(props){

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState({
        email: "",
        password: "",
        fullName: "",
        username: ""
    });
    
    const [showPassword, setShowPassword] = React.useState(false)
    const {loading, error, signup} = useSignUpWithEmailAndPassword();
    
    

    function toggleShow(){
        setShowPassword(prevState => !prevState)
    }
    return(
        <form className="signup-page" >
            <div>
                <div className="signup-user-info">
                    <h1 className="instagram">Instagram</h1>
                    <input 
                        value={userInfo.email} 
                        type="email"  
                        placeholder="Email"
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    >
                        
                    </input>
                    
                    <input 
                        value={userInfo.fullName} 
                        type="text" 
                        placeholder="Full Name"
                        onChange={(e) => setUserInfo({...userInfo, fullName: e.target.value})}
                    >

                    </input>
                    <input 
                        value={userInfo.username} 
                        type="text" 
                        placeholder="Username"
                        onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                    >

                    </input>
                    <div className="password-input">
                        <input 
                            value={userInfo.password} 
                            type= {showPassword ? "text" : "password"} 
                            placeholder= "Password"
                            onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                        >
                        
                        </input>
                        <button 
                            type="button" 
                            className="show-password-btn" 
                            onClick={toggleShow}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                   
                    
                    <button className="submit-btn" 
                        onClick={(e) => {
                            e.preventDefault()
                            
                            signup(userInfo)}}
                            
                    >
                        Sign Up
                    </button>     
                </div>
                <div className="login">
                    <h3>Have an account?</h3>
                    <a onClick={props.togglePage}>Log in</a>
                </div>
            </div>
        </form>
    )
}

export default SignUp
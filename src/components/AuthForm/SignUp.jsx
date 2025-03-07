import { useNavigate } from "react-router-dom"
import React from "react";
function SignUp(props){

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState({
        email: "",
        password: "",
        fullName: "",
        username: ""
    });

    function handleAuth(e){
        e.preventDefault();
        if (!userInfo.email || !userInfo.password || !userInfo.fullName || !userInfo.username){
            alert("Please fill out all inputs");
            return;
        }
        
        navigate("/");

        
    }

    return(
        <form className="signup-page">
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
                        value={userInfo.password} 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
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
                    <button className="submit-btn" onClick={handleAuth}>Sign Up</button>     
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
import React from "react"
import ReactDOM from "react-dom"
import { AiOutlineClose } from "react-icons/ai";
function EditModal(props){
    const [inputs, setInputs] = React.useState({
        fullName: "",
        username: "",
        bio: ""
    })
    
    function toggleSubmit(){
        console.log("clicked")
    }

    return ReactDOM.createPortal(
        <div className="editmodal-container" >
            <button className="editmodal-close" onClick={() => props.toggleModal()}>
                <AiOutlineClose />
            </button>
            <div className="editmodal-content">
                <h1>Edit Profile</h1>
                <div className="editmodal-profile">
                    <img className="profile-avatar"src="/images/img1.png"></img>
                    <button className="edit-profile-btn">Edit Profile Picture</button>
                </div>
                <div className="editmodal-form">
                    <div className="editmodal-input">
                        <div className="inputs">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                onChange={(e) => setInputs(prevState => ({...prevState, fullName: e.target.value}))} 
                                type="text" 
                                id="fullName"
                            >
                            </input>
                        </div>
                        <div className="inputs"> 
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                onChange={(e) => setInputs(prevState => ({...prevState, username: e.target.value}))} 
                            >       
                            </input>
                        </div>
                        <div className="inputs">
                            <label htmlFor="bio">Bio</label>
                            <input 
                                onChange={(e) => setInputs(prevState => ({...prevState, bio: e.target.value}))} 
                                type="text" 
                                id="bio"
                            >
                            </input>
                        </div>
                    </div>
                    <div className="editmodal-btns">
                        <button className="cancel-btn" onClick={props.toggleModal}>Cancel</button>
                        <button className="editmodal-submit" onClick={toggleSubmit}>Submit</button>
                    </div>
                    
                </div>
               


            </div>
        </div>
        ,document.getElementById("portal")
    )
}

export default EditModal
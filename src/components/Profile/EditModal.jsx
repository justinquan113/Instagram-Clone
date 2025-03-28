import React from "react"
import ReactDOM from "react-dom"
import { AiOutlineClose } from "react-icons/ai";
import usePreviewImg from "../../hooks/usePreviewImg";
import useAuthStore from "../../store/authStore";
import { auth } from "../../firebase/firebase";
import useEditProfile from "../../hooks/useEditProfile";
function EditModal(props){
    const [inputs, setInputs] = React.useState({
        fullName: "",
        username: "",
        bio: ""
    })
    const {selectedFile, handleImageChange, setSelectedFile} = usePreviewImg()
    const fileRef = React.useRef(null)
    const authUser = useAuthStore(state => state.user)
    const {isUpdating, editProfile} = useEditProfile()

    async function handleSubmit() {
        try{
            await editProfile(inputs, selectedFile)
            props.toggleModal()
            setSelectedFile(null)
        }catch(error){
            alert(error)
        }
    }
    return ReactDOM.createPortal(
        <div className="editmodal-container" >
            <button className="editmodal-close" onClick={() => props.toggleModal()}>
                <AiOutlineClose />
            </button>
            <div className="editmodal-content">
                <h1>Edit Profile</h1>
                <div className="editmodal-profile">
                    <img className="profile-avatar"src={selectedFile || authUser.profilePicURL}></img>
                    <button className="edit-profile-btn" onClick={() => fileRef.current.click()}>Edit Profile Picture</button>
                    <input type="file" hidden ref={fileRef} onChange={handleImageChange}></input>
                </div>
                <div className="editmodal-form">
                    <div className="editmodal-input">
                        <div className="inputs">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                onChange={(e) => setInputs(prevState => ({...prevState, fullName: e.target.value}))} 
                                type="text" 
                                id="fullName"
                                value={inputs.fullName}
                            >
                            </input>
                        </div>
                        <div className="inputs"> 
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                onChange={(e) => setInputs(prevState => ({...prevState, username: e.target.value}))} 
                                value={inputs.username}
                            >       
                            </input>
                        </div>
                        <div className="inputs">
                            <label htmlFor="bio">Bio</label>
                            <input 
                                onChange={(e) => setInputs(prevState => ({...prevState, bio: e.target.value}))} 
                                type="text" 
                                id="bio"
                                value={inputs.bio}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="editmodal-btns">
                        <button className="cancel-btn" onClick={props.toggleModal}>Cancel</button>
                        <button className="editmodal-submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    
                </div>
               


            </div>
        </div>
        ,document.getElementById("portal")
    )
}

export default EditModal
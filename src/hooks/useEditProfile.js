import React from "react"
import useAuthStore from "../store/authStore"
import { firestore, storage } from "../firebase/firebase"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { doc, updateDoc } from "firebase/firestore"
import useUseProfileStore from "../store/userProfileStore"
function useEditProfile(){
    
    const authUser = useAuthStore(state => state.user)
    const setAuthUser = useAuthStore(state => state.setUser)
    const setUserProfile = useUseProfileStore(state => state.setUserProfile)

    async function editProfile(inputs, selectedFile){
        if(!authUser){
            return
        }
        
        const storageRef = ref(storage, `profilePics/${authUser.uid}`)
        const userDocRef = doc(firestore, "users", authUser.uid)
        let URL = ""
        try{
            if(selectedFile){
                await uploadString(storageRef, selectedFile, "data_url")
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`))
            }
            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicURL: URL || authUser.profilePicURL 
            }
            await updateDoc(userDocRef, updatedUser)
            localStorage.setItem("user-info", JSON.stringify(updatedUser))
            setAuthUser(updatedUser)
            setUserProfile(updatedUser)
            
        }catch(error){
            alert(error)
        }
        
    }
    return {editProfile}
}

export default useEditProfile
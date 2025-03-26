import { collection, getDocs, query, where } from "firebase/firestore"
import React from "react"
import { firestore } from "../firebase/firebase"
import useUseProfileStore from "../store/userProfileStore"

const useGetUserProfileByUsername = (username) => {
    
    const {userProfile, setUserProfile} = useUseProfileStore()
    React.useEffect(() => {
        const getUserProfile = async () => {
            
            try{
                const q = query(collection(firestore, "users"), where("username", "==", username)) //searching for user with same username from "users" collection in firestore DB
                const querySnapshot = await getDocs(q) //getting the user's document
                
                
                if(querySnapshot.empty){
                    return setUserProfile(null)
                }
                
                let userDoc
                querySnapshot.forEach((doc) => {
                    userDoc = doc.data()
                })
                setUserProfile(userDoc)
                console.log(userDoc)
            }
            catch(error){
                alert(error)
            }
        }
        getUserProfile()
    }, [setUserProfile])
    return { userProfile}
}

export default useGetUserProfileByUsername
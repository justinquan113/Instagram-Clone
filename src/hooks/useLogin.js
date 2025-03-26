import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import useAuthStore from '../store/authStore'
import { doc, getDoc } from 'firebase/firestore'

function useLogin() {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const loginUser = useAuthStore(state => state.login)


  async function handleLogin(inputs) {
    if (!inputs.email || !inputs.password){
      return alert("Please fill out all fields")
    }
    try{
      const signInUser = await signInWithEmailAndPassword(inputs.email, inputs.password)
      
      if (signInUser){
        //doc(firestore, collectionName, documentId), reference to the users collection and one user id
        const docRef = doc(firestore, "users", signInUser.user.uid) 
        //gets the document containing user-data by taking in a document reference with uid
        const docSnap = await getDoc(docRef)
        //docSnap.data() extracts the user data
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
        loginUser(docSnap.data())
      
      }
      

    }catch(error){
      console.log(error)
    }
  }


  return {handleLogin, loading, error}
}

export default useLogin

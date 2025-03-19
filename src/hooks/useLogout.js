import React from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import useAuthStore from '../store/authStore'

function useLogout(){
    const {signOut, loading, error} = useSignOut(auth)
    const logout = useAuthStore(state => state.logout)
    const handleLogout = async() => {
        try{
            await signOut;
            localStorage.removeItem('user-info')
            logout()
        }catch(error){
            console.log(error)

        }
    }
    return {handleLogout, loading, error}
}
export default useLogout
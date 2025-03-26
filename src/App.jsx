
import './App.css';
import HomePage from './pages/HomePage';
import AuthPage from "./pages/AuthPage"
import { Navigate, Route, Routes } from 'react-router-dom';
import PageLayout from './Layouts/PageLayout';
import ProfilePage from './pages/ProfilePage';
import Post from './components/Profile/PostModal';
import useAuthStore from './store/authStore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
function App() {
  
    const authUser = useAuthStore(state => state.user)
    
    return(
      <PageLayout>
        <Routes>
            <Route path='/' element={authUser ? <HomePage /> : <Navigate to= '/auth'/>} />
            <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to='/'/>} />
            <Route path= '/:username' element={authUser ? <ProfilePage/> : <Navigate to= '/auth'/>} />
        </Routes>
       
      </PageLayout>

      
    )

  
}

export default App
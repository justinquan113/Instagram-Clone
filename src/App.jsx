
import './App.css';
import HomePage from './pages/HomePage';
import AuthPage from "./pages/AuthPage"
import { Navigate, Route, Routes } from 'react-router-dom';
import PageLayout from './Layouts/PageLayout';
import ProfilePage from './pages/ProfilePage';
import Post from './components/Profile/PostModal';
import useAuthStore from './store/authStore';
function App() {
  
    const authUser = useAuthStore(state => state.user)
    return(
      <PageLayout>
        <Routes>
            <Route path='/' element={authUser ?<HomePage /> : <Navigate to= '/auth'/>} />
            <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to='/'/>} />
            <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
       
      </PageLayout>

      
    )

  
}

export default App
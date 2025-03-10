
import './App.css';
import HomePage from './pages/HomePage';
import AuthPage from "./pages/AuthPage"
import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layouts/PageLayout';
import ProfilePage from './pages/ProfilePage';
import Post from './components/Profile/PostModal';
function App() {
  
    
    return(
      <PageLayout>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
       
      </PageLayout>

      
    )

  
}

export default App
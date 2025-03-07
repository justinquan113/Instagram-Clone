
import './App.css';
import HomePage from './pages/HomePage';
import AuthPage from "./pages/AuthPage"
import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layouts/PageLayout';
function App() {
  
    
    return(
      <PageLayout>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage/>} />
        </Routes>
      </PageLayout>

      
    )

  
}

export default App
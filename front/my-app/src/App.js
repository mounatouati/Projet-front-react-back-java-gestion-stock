import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import UserProvider from './components/contexts/UserContext';

import Main from './components/Main/Main';
import Home from './components/pages/Home/Home';
import Profil from './components/pages/Profil/Profil';
import Auth from './components/pages/Auth/Auth';
import ListeArticles from './components/pages/ListeArticles/ListeArticles';
import { Routes ,Route, BrowserRouter} from 'react-router-dom';
import LogOut from './components/containers/LogOut/LogOut';
import Header from './components/Header/Header';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
function App() {
  const token = localStorage.getItem('token');
     
  return (
    <div className='App'>
    <UserProvider>
      <BrowserRouter>
      <Header/> 
      
        {token === null ? 
        <div className='SideMenuandPageContent'><Main /></div>  
        : <div className='SideMenuandPageContent'>
          <Navbar/>
          <Main /> 
        </div>}
     
      <Footer/> 
      </BrowserRouter>
    </UserProvider>
  </div>

  );
}

export default App;


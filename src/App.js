
import './styles/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/UI/appRouter/AppRouter'
import { AuthContext } from './context';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;

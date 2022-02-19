
import './styles/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/UI/appRouter/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;

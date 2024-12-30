import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ProductCard } from './components/productCard';
import UserData from './components/userData';
import Testing from './components/testing';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Ensure correct imports for Routes and Route

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<h1>404 Eoor</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


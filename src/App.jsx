import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import { ProductCard } from './components/productCard';
import UserData from './components/userData';
import Testing from './components/testing';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Ensure correct imports for Routes and Route
import AdminHomePage from './pages/adminHomePage';
import UserRegistrationPage from './pages/signInPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<UserRegistrationPage />} />
        <Route path="/admin/*" element={<AdminHomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



import axios from 'axios';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    axios
      .post('http://localhost:5000/api/users/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);

        if (!res.data.user) {
          alert('Invalid login credentials');
          return;
        }

        localStorage.setItem('token', res.data.token);

        if (res.data.user.type === 'admin') {
          window.location.href = '/admin';
        } else {
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert('An error occurred during login.');
      });
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-400">
      <div className="flex flex-col justify-center items-center w-[450px] h-[400px] bg-slate-500">
        <img src="/logo.webp" className="rounded-full w-[100px]" alt="Logo" />

        <span>Email</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-4 rounded"
        />

        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 rounded"
        />

        <button className="bg-slate-400 p-2 rounded" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

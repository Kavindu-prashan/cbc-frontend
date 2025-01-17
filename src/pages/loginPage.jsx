import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {

  const [email,setEmail] = useState("Your email")
  const [password,setpassword] = useState("")
  
  return (
    <div className='flex justify-center items-center w-full h-screen bg-slate-400' >
      <div className='flex flex-col justify-center items-center w-[450px] h-[400px] bg-slate-500' >
        <img src='/logo.webp' className='rounded-full w-[100px]'></img>

        <span>Email</span>
        <input type="text" defaultValue={email} onChange={
          (e)=>{
            setEmail(e.target.value)
          }
        }/>

        <span>Password</span>
        <input type="password" defaultValue={password} onChange={
          (e)=>{
            setpassword(e.target.value)
          }
        }/>
        <button className='bg-slate-400 rounded'>Login</button>
      </div>
    </div>
  );
}
     
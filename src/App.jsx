import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <ProductCard name="Laptop" price="$99.99"></ProductCard>
        <ProductCard></ProductCard>
        <UserData name="Iphone 16" price="$499"></UserData> */}
        
        <Testing></Testing>

    </>
  )
}

export default App

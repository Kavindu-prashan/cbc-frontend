import { Link, Routes, Route } from 'react-router-dom'; // Ensure 'Routes' is imported
import { GoGraph } from "react-icons/go";
import { FaBox, FaClipboardList, FaUsers } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import AdminProductsPage from './admin/adminProductsPage';

function Dashboard() {
  return <div className="text-white text-xl">Welcome to the Dashboard!</div>;
}

export default function AdminHomePage() {
  return (
    <div className="bg-cyan-200 w-full h-screen flex">

      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-400 flex flex-col items-center py-5">
        <h1 className="text-white text-2xl font-bold mb-10">Admin Panel</h1>
        <nav className="flex flex-col gap-6 w-full px-4">
          <Link
            className="flex items-center gap-2 text-white hover:bg-blue-500 py-2 px-4 rounded"
            to="/admin/dashboard"
          >
            <GoGraph className="text-lg" />
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-2 text-white hover:bg-blue-500 py-2 px-4 rounded"
            to="/admin/products"
          >
            <FaBox className="text-lg" />
            Products
          </Link>
          <Link
            className="flex items-center gap-2 text-white hover:bg-blue-500 py-2 px-4 rounded"
            to="/admin/orders"
          >
            <FaClipboardList className="text-lg" />
            Orders
          </Link>
          <Link
            className="flex items-center gap-2 text-white hover:bg-blue-500 py-2 px-4 rounded"
            to="/admin/customers"
          >
            <FaUsers className="text-lg" />
            Customers
          </Link>
          <Link
            className="flex items-center gap-2 text-white hover:bg-blue-500 py-2 px-4 rounded"
            to="/admin/home"
          >
            <AiOutlineHome className="text-lg" />
            Home
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen bg-sky-600">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="products"
            element={<AdminProductsPage/>}
          />
          <Route
            path="orders"
            element={<div className="text-white text-xl">Orders Page</div>}
          />
          <Route
            path="customers"
            element={<div className="text-white text-xl">Customers Page</div>}
          />
          <Route
            path="home"
            element={<div className="text-white text-xl">Home Page</div>}
          />
          <Route
            path='/*' element={<h1>404 not found admin page</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

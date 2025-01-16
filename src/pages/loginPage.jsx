import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login Page</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Login
        </button>
        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-blue-500 hover:underline focus:ring focus:ring-blue-300"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

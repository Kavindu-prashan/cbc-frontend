import { Link } from 'react-router-dom';

export default function UserRegistrationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">User Registration</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Register
        </button>
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-500 hover:underline focus:ring focus:ring-blue-300"
            >
              Login here
            </Link>
          </p>
          <p className="mt-2 text-sm">
            <Link
              to="/"
              className="text-blue-500 hover:underline focus:ring focus:ring-blue-300"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

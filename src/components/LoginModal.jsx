import { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can dispatch an action, make an API call, etc.
  };

  return (
    <>
      {isOpen && (
        <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white fixed top-0 left-0 p-8 w-[400px] rounded-lg z-60">
            <div className="flex justify-end">
              <button className="text-gray-500" onClick={onClose}>
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Login/Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 text-sm font-medium">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button
                type="button"
                className="bg-orange-900 text-white px-4 py-2 rounded-md"
                onClick={handleLogin}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
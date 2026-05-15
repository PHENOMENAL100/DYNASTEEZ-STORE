import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  if (!isOpen) return null;

  const doLogin = () => {
    console.log('🔥 doLogin called!');
    setLoading(true);

    setTimeout(() => {
      const userData = {
        firstName: 'Emmanuel',
        lastName: 'Okonkwo',
        email: email || 'test@test.com',
        id: 'user-001'
      };

      console.log('✅ About to call onLoginSuccess with:', userData);
      console.log('onLoginSuccess type:', typeof onLoginSuccess);

      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess(userData);
        console.log('✅ onLoginSuccess executed!');
      } else {
        console.error('❌ onLoginSuccess is not a function!', onLoginSuccess);
        alert('ERROR: onLoginSuccess is not a function. Check console.');
      }

      setLoading(false);
    }, 500);
  };

  const doRegister = () => {
    console.log('🔥 doRegister called!');
    setLoading(true);

    setTimeout(() => {
      const userData = {
        firstName: firstName || 'Emmanuel',
        lastName: lastName || 'Okonkwo',
        email: email || 'test@test.com',
        id: 'user-001'
      };

      console.log('✅ About to call onLoginSuccess with:', userData);

      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess(userData);
        console.log('✅ onLoginSuccess executed!');
      } else {
        console.error('❌ onLoginSuccess is not a function!', onLoginSuccess);
        alert('ERROR: onLoginSuccess is not a function. Check console.');
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex">
      <div className="flex-1 bg-black/60" onClick={onClose} />

      <div className="w-full md:w-1/2 bg-white h-full overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 z-10">
          <X className="w-6 h-6" />
        </button>

        <div className="px-8 md:px-16 py-12 pt-20">
          {/* Tabs */}
          <div className="flex space-x-8 mb-12">
            <button 
              onClick={() => setIsLogin(true)}
              className={`text-sm tracking-widest uppercase pb-2 border-b-2 ${
                isLogin ? 'border-black text-black' : 'border-transparent text-gray-400'
              }`}
            >
              Log In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`text-sm tracking-widest uppercase pb-2 border-b-2 ${
                !isLogin ? 'border-black text-black' : 'border-transparent text-gray-400'
              }`}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-gray-600">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-gray-600">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent" 
                  />
                </div>
              </div>

              <button 
                onClick={doLogin}
                disabled={loading}
                className="w-full border border-black py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors disabled:opacity-50 mt-8"
              >
                {loading ? 'Please wait...' : 'Login'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-gray-600">First Name</label>
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-gray-600">Last Name</label>
                  <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-600">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent" 
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-600">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent" 
                />
              </div>

              <button 
                onClick={doRegister}
                disabled={loading}
                className="w-full border border-black py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors disabled:opacity-50 mt-8"
              >
                {loading ? 'Please wait...' : 'Register'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
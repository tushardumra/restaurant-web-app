import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm';

const Auth = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className='min-h-screen grid md:grid-cols-2'>

      {/* LEFT SIDE */}
      <div
        className='relative hidden md:flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60'></div>

        {/* Content */}
        <div className='relative z-10 text-center text-white px-8'>
          <h1 className='text-5xl font-bold mb-4'>Welcome to Foodie</h1>
          <p className='text-lg text-gray-200 max-w-md'>
            Delicious meals delivered fresh and fast to your doorstep.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='bg-gray-50 flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-lg'>
          {
            isLogin ? (
              <LoginForm setIsLogin={setIsLogin} />
            ) : (
              <RegisterForm setIsLogin={setIsLogin} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Auth

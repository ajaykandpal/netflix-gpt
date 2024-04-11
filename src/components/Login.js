import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='background'
        />
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className=' font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type='text'
          placeholder='Email'
          className='p-2 my-2 w-full bg-gray-700'
        />
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-2 my-2 w-full bg-gray-700'
          />
        )}
        <input
          type='password'
          placeholder='Password'
          className='p-2 my-2 w-full bg-gray-700'
        />
        <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='cursor-pointer' onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

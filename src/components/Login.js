import React, { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate data
    const isValidData = validateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isValidData);
    // console.log(email, password, isValidData);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
      >
        <h1 className=' font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type='text'
          placeholder='Email'
          ref={email}
          className='p-2 my-2 w-full bg-gray-700'
        />
        {!isSignInForm && (
          <input
            type='text'
            ref={fullName}
            placeholder='Full Name'
            className='p-2 my-2 w-full bg-gray-700'
          />
        )}
        <input
          type='password'
          placeholder='Password'
          ref={password}
          className='p-2 my-2 w-full bg-gray-700'
        />
        {errorMessage && (
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        )}
        <button
          className='p-2 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
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

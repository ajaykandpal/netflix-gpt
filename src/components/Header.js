import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img
        className='w-44'
        src='https://imgs.search.brave.com/fUeSxYDQoVKpFgawp73nTPVtmWGMS1oFzJZIxLJZsE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L05ldGZsaXgtTG9n/by01MDB4MjgxLnBu/Zw'
        alt='logo'
      />
      {user && (
        <div className='flex p-2'>
          <img
            className='w-12 h-12 mt-4'
            src={user.photoURL}
            alt='user-icon'
          ></img>

          <button className='ml-4 font-bold text-white' onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

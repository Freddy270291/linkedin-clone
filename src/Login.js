import React, { useState } from "react";
import { auth } from "./Components/firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt=''
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name (Required if registering)'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type='text'
          placeholder='Profile pic URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />

        <button type='submit' onClick={loginToApp} className='login__button'>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

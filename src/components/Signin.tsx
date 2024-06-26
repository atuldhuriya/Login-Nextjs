"use client"
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <div className='bg-gray-300 min-h-96 max-w-80 text-center mx-auto mt-5 rounded-lg'><br />
        <div className='mt-5'>
            <h1 className='text-3xl'>Login</h1><br />
            <input className="px-4 py-2"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
            />
            <br />
            <br />
            <input  className="px-4 py-2"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <br />
            <br />
            <button type="button" className="px-4 py-2 mt-3 bg-blue-500  text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    );
}

export default LoginPage;

import { Button } from '@/components/atoms/button'
import Input from '@/components/atoms/input'
import { Lable } from '@/components/atoms/lable'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

// export interface LoginResponse {
//   ok: boolean;
//   status: number;
//   message: string;
//   error: string;
//   // Add other properties if needed
// }


function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    try {
      const apiUrl = await fetch('https://compliant-system.vercel.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      });
      if (!apiUrl.ok) {
        // If the apiUrl status is not OK, handle the error Message
        const errorData = await apiUrl.json();
        setError(errorData.error);
        setSuccessMessage('');
        return;
      }
      // If the apiUrl status is OK, handle the Success Message
      const successData = await apiUrl.json();
      setSuccessMessage(successData.message);
      setError('');
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  return (
    <LoginContainer>
        <Image
        src='/assets/images/privacy.png'
        alt='sign_up icon'
        width={100}
        height={100}
        />
            <h5>Login</h5>
            {error && <p style={{ color: 'red',textAlign:'center'}}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form>
        <Lable> Admission number or Email</Lable>
        <input 
        type='text'  
        value={identifier}
        placeholder='enter admission number or email'
        onChange={(e) => setIdentifier(e.target.value)}
        />
        <Lable> Password</Lable>
        <input 
        type='password'  
        placeholder='enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        </form>
    </LoginContainer>
  )
}


export default Login

export const LoginContainer = styled.div`
    width: 50%;
    height: auto;
    margin: 10px auto;
    background-color: rgb(239, 246, 248);
    border-radius: 30px 5px 30px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
    img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    }
    h5{
    font-family: Rubik Burned;
    text-align: center;
    font-size: 25px;
    letter-spacing: 2px;
    font-weight: bold;
    }
    form {
    width: 90%;
    height: auto;
    margin: 30px auto;
    padding: 10px 10px;
    }
`;

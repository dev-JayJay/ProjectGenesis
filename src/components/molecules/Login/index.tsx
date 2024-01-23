import { Button } from '@/components/atoms/button'
import Input from '@/components/atoms/input'
import { Lable } from '@/components/atoms/lable'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

function Login() {
  return (
    <LoginContainer>
        <Image
            src='/assets/images/privacy.png'
            alt='sign_up icon'
            width={100}
            height={100}
            />
            <h5>Login</h5>
        <form>
        <Lable> Admission number or Email</Lable>
        <Input type={`text`} placeholder={`enter admission number or Email`} />
        <Lable> Password</Lable>
        <Input type={`text`} placeholder={`enter password`} />
        <Button>Login</Button>
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

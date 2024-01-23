import Image from 'next/image'
import style from './style.module.css'
import styled from 'styled-components'
import { Button } from '@/components/atoms/button'

export const Container = styled.div`
width: 90%;
margin: 0 auto;
padding: 0;
img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
}

button {
    width: 60%;
    height: 45px;
    margin: 15px auto;
    border-radius: 15px 0 15px 0;
    justify-content: center;
    color: #fff;
    font-family: segoe UI;
    font-weight: bold;
    background-color: #74cdea;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
}
`;


export const Div = styled.div`
margin: 5px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
label {
    font-family: segoe UI;
    font-weight: 500;
    font-size: 15px;
    color: #000;
    letter-spacing: 1px;
}
input {
    width: 100%;
    height: 40px;
    border: 0.5px solid gray;
    border-radius: 10px;
    padding: 10px 10px;
}
`;

function  Sign_Up() {
  return (
    <section>
        <form className={style.form}>
           <Container>
           <Image
            src='/assets/images/add-friend.png'
            alt='sign_up icon'
            width={100}
            height={100}
            />
            <h5 className={style.h5}>Sign Up</h5>
            {/* <div className={style.hr}>
                <hr/><span>Sign Up</span><hr/>
            </div> */}
            <Div>
                <label>Full Name</label>
                <input type='text' placeholder='John Doe' />
            </Div>
            <Div>
                <label>Admission Number</label>
                <input type='number' placeholder='0123456789' />
            </Div>
            <Div>
                <label>Email</label>
                <input type='Email' placeholder='example@gmail.com' />
            </Div>
            <Div>
                <label>Password</label>
                <input type='Email' placeholder='enter password' />
            </Div>
            <Div>
                <label>Retype Password</label>
                <input type='Email' placeholder='re-enter password' />
            </Div>
            <Button>Sign Up</Button>
           </Container>
        </form>
    </section>
  )
}

export default Sign_Up

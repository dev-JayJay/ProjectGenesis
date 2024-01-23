"use client"
import Sign_Up from '@/components/organisms/SignUp';
import style from './page.module.css'
import Login from '@/components/molecules/Login';

export default function Home() {
  return (
    <main className={style.body}>
      <Sign_Up />
      <Login />
    </main>
  );
}

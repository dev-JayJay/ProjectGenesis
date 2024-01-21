"use client"
import Sign_Up from '@/components/organisms/Login';
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.body}>
      <Sign_Up />
    </main>
  );
}

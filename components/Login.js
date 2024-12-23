import React from 'react'
import {Domine, Quicksand } from 'next/font/google';
import Button from './Button';


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['400']
});

const domine = Domine({
  subsets: ["latin"],
  weight: ['600']
});


export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
      <h3 className={'text-3xl sm:text-4xl md:text-5xl ' + quicksand.className}>Log In / Register</h3>
      <p className={' ' + quicksand.className}>Last step!</p>
      <input className='w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-solid border-teal-600'
      placeholder='Email'/>
      <input className='w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-solid border-teal-600'
      placeholder='Password' type='password'/>
      <div className='max-w-[350px] w-full mx-auto'>
        <Button text="Submit" full/>
      </div>
      
    </div>
  )
}

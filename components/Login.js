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
      <h3 className={'text-3xl sm:text-4xl md:text-5xl ' + quicksand.className}>Log In</h3>
      <p className={' ' + quicksand.className}>Last step!</p>
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-teal-600 py-2 sm:py-3 border border-solid border-teal-500 rounded-full outline-none '
      placeholder='Email'/>
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-teal-600 py-2 sm:py-3 border border-solid border-teal-500 rounded-full outline-none '
      placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto shadow duration-200 hover:bg-teal-600 rounded-full'>
        <Button text="Submit" full/>
      </div>
      <p className={'text-center ' + quicksand.className}>Don&#39;t have an account? <span className='text-teal-600 '>Sign up</span></p>
      
    </div>
  )
}

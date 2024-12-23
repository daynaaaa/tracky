import { Domine, Quicksand } from 'next/font/google';
import React from 'react'
import Button from './Button';
import Calendar from './Calendar';

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ['400']
});

const domine = Domine({
    subsets: ["latin"],
    weight: ['600']
});

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-4 sm:gap-8'>
        <h1 className={'text-4xl sm:text-text-5xl md:text-6xl text-center ' + quicksand.className}>
            <span className={'text-5xl sm:text-text-6xl md:text-7xl textGradient ' + domine.className}>
            Tracky
            </span>
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto '>
            Organize and track your upcoming <span className='textGradient'>deadlines</span> and <span className='textGradient'>events</span> 🤩
        </p>
        <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
                <Button text="Sign Up" />
                <Button text="Login" dark/>
        </div>
        <div>
            <Calendar />
        </div>
    </div>
  )
}

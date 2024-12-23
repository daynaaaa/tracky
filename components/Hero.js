import { Domine, Quicksand } from 'next/font/google';
import React from 'react'

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
    <div className='py-4 md:py-12'>
        <h1 className={'text-4xl sm:text-text-5xl md:text-6xl text-center ' + quicksand.className}>
            <span className={'text-5xl sm:text-text-6xl md:text-7xl textGradient ' + domine.className}>
            Tracky
            </span>
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center'>
            Organize and track your upcoming <span className='textGradient'>deadlines</span> and <span className='textGradient'>events</span> 🤩
        </p>
    </div>
  )
}

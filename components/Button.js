import React from 'react'
import { Domine, Quicksand } from 'next/font/google';

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ['400']
});

const domine = Domine({
    subsets: ["latin"],
    weight: ['600']
});

export default function Button(props) {
    const {text, dark, full } = props

    return (
        <button className= {'rounded-full overflow-hidden duration-200 hover:opacity-80 border-2 border-solid border-teal-600 ' + 
        (dark ? 'text-teal-50 bg-teal-600  ' : 'text-teal-600 bg-teal-50  ') + 
        (full ? 'grid place-items-center w-full ' : ' ')}>
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + quicksand.className}>
                {text}
            </p>
            
        </button>
    )
}

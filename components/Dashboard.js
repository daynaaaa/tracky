import React from 'react'
import { Domine, Quicksand } from 'next/font/google';
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

export default function Dashboard() {
  const statuses = {
    date: (new Date()).toDateString(),
    next_task: 'interview',
    due_date: (new Date()).toDateString(),
    dummy: '',
    time_remaining: '11:11:11',
    additional_information: '[insert zoom link]\n' + '[other info]'
  }

  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16 '>
      <div className='p-4 gap-4 grid grid-cols-1 sm:grid-cols-3 bg-teal-100 text-teal-600 rounded-lg '>
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
              <div key={statusIndex} className='flex flex-col gap-1 sm:gap-2 '>
                <p className={'font-medium uppercase text-xs sm:text-sm ' + domine.className}>{status.replaceAll('_', ' ')}</p>
                <p className={'text-base sm:text-lg truncate ' + quicksand.className}>{statuses[status]}</p>
              </div>
          )
        })}
      </div>
      {/* add an assignment */}
      <h4 className={'text-2xl sm:text-3xl md:text-4xl text-center ' + quicksand.className}>
        Add an <span className='textGradient'>assignment</span> or <span className='textGradient'>assessment</span>:
      </h4>
      <div className='flex flex-col flex-1 items-center gap-4 '>
        <input className='w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-solid border-teal-500 rounded-full outline-none 'placeholder='Description'/>

        <input className='w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-solid border-teal-500 rounded-full outline-none 'placeholder='Additional Information'/>

        <div className={'text-teal-600 ' + quicksand.className}>
          <label htmlFor="duedate" className='text-left '>Due Date: </label>
          <input type="date" id="duedate" min={(new Date()).toDateString()} max="2030-12-31" className='bg-teal-50 '/>
        </div>

        <div className='max-w-[400px] w-full mx-auto shadow duration-200 hover:bg-teal-400 rounded-full'>
          <Button text="Add" full/>
      </div>
      </div>
        <Calendar />

    </div>
  )
}

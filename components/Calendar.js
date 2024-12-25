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

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const monthsArr = Object.keys(months)
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function () {
  const year = 2024
  const month = 'December'
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1)
  const firstDay = monthNow.getDay()
  const daysInMonth = new Date(year, Object.keys(month).indexOf(month) + 1, 0).getDate()

  const numDays = firstDay + daysInMonth
  const numRows = (Math.floor(numDays / 7)) + (numDays % 6 ? 1 : 0)


  return (
    <div className='flex flex-col overflow-hidden gap-1'>
        {[...Array(numRows).keys()].map((row, rowIndex) => {
          return (
            <div key={rowIndex} className='grid grid-cols-7 gap-1'>
              {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDay - 1)

                let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDay) ? false : true

                let isToday = dayIndex === now.getDate()

                if(!dayDisplay){
                  return (
                    <div className='bg-whate' key={dayOfWeekIndex}/>
                  )
                }

                return(
                  <div key={dayIndex}>
                    aaa
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

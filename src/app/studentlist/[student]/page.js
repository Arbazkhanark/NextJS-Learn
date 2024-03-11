'use client'
import Link from 'next/link'
import React from 'react'

const Students = ({params}) => {
    console.log(params)
  return (
    <div>
    <h1>Student Details</h1>

    <p className='font-bold'>Name: {params.student}</p>
    </div>
  )
}

export default Students
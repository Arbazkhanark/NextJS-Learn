'use client'
import React from 'react'

const Lectures = ({params}) => {
    console.log(params)
  return (
    <div>
    <h1>Day of College Lecture {params.lecture[0]} </h1> 
    <p> {params.lecture[1]} </p>
    </div>
  )
}

export default Lectures
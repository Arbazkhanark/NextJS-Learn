import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h1>Dynamic Routing</h1>

        <Link href='/studentlist/anil'>Anil</Link>
        <Link href='/studentlist/sakir'>Sakir</Link>
        <Link href='/studentlist/sahil'>Sahil</Link>
        <Link href='/studentlist/aman'>Aman</Link>
        <Link href='/studentlist/arbaz'>Arbaz</Link>
        <Link href='/studentlist/irshad'>Irshad</Link>
    </div>
  )
}

export default StudentList
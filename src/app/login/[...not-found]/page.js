import Link from 'next/link'
import React from 'react'

const SpecificNotFound = () => {
  return (
    <div>
      <h1> In LogIn {'->'} Page Not Found </h1>
      <Link href='/login'>LogIn</Link>
    </div>
  )
}

export default SpecificNotFound

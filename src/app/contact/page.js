'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"


const Contact = () => {
    const router=useRouter();
  return (
    <div>
        <h1>Contact Page </h1>
        <Link className="text-blue-600" href='/about'>About</Link>
        <button onClick={()=>router.push("/")}>Home</button>
    </div>
  )
}

export default Contact
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CommonLayout({children}){
    const pathName=usePathname() // Conditional Rendering
    console.log(pathName)
    return(
        <div>
            <h1>Common LogIn Layout</h1>
            <div className="bg-white text-black p-2 flex justify-between">
                <Link href='/login'>LogIn</Link>
                <Link href='/login/login_student'>LogIn as Student</Link>
                <Link href='/login/login_teacher'>LogIn as Teacher</Link>
            </div>
            {children}
        </div>
    )
}
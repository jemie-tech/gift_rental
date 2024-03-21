'use client'
import { useState } from "react"
import Link from "next/link"
import Image from 'next/image'
import {signIn} from 'next-auth/react'
import { Input } from "@/components/ui/input"

const page = () => {
    const [user,setUser] = useState({})
    const inputs = [
        {
            type:'email',
            name:'email',
            placeholder:'Email',
            required:true
        },
        {
            type:'password',
            name:'password',
            placeholder:'Password',
            required:true
        },
    ]

    const handleChange = (e) => {
        const {name,value} = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
    }

  return (
    <div className="flex h-screen items-center justify-center font-semibold">
        <div className="h-screen w-screen fixed">
            <Image
            src="/authCover.jpg"
            alt="Background Image"
            layout="fill" // Fill the container dimensions
            objectFit="cover" // Adjust image size to cover the container
            />
            <div className="h-screen w-screen z-10 bg-black/80">

            </div>
        </div>
        <form 
        onSubmit={handleSubmit}
        className="shadow-md shadow-slate-900 rounded-md bg-white text-slate-900 w-[400px] h-[440px] p-5 flex flex-col items-center justify-center z-20">
            <h2 className="font-bold text-2xl mb-4">Gift Apartment | Log In </h2>
            <div className="grid gap-4 w-full">
                {inputs.map((d,i) => {
                    const {type,name,placeholder,required,minLength} = d
                    return(
                        <Input
                        key={i}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        onChange={handleChange}
                        
                        />
                    )
                })}
            </div>
            <button className="px-2 py-2 rounded-sm bg-blue-800 text-white w-full h-fit my-5">
                Log In
            </button>
            <div className="flex w-full gap-2 justify-end">
                <Link className="hover:text-blue-800" href='/sign-up'>Sign Up </Link>
            </div>
        </form>
    </div>
  )
}

export default page
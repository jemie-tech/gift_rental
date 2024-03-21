'use client'
import { useState,useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import axios from "axios"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const page = () => {
    const [user,setUser] = useState({})
    const [apartments,setApartments] = useState([])
    useEffect(() => {
        const fetchApartments = async () => {
            const res = await axios.get('http://localhost:8000/apartments')
            setApartments(res.data.apartments)
        }
        fetchApartments()
    },[])
    const inputs = [
        {
            type:'text',
            name:'name',
            placeholder:'First Name',
            required:true
        },
        {
            type:'email',
            name:'email',
            placeholder:'Email',
            required:true
        },
        {
            type:'text',
            name:'phone',
            placeholder:'Phone Number',
            required:true,
            minLength:10
        },
        {
            type:'password',
            name:'password',
            placeholder:'Password',
            required:true
        },
    ]
    const signUpUrl = ''
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await axios.post(
            'http://localhost:8000/user',
            user
        )
        console.log(res)
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
        className="shadow-md shadow-slate-900 rounded-md bg-white text-slate-900 w-[400px] h-[500px] p-5 flex flex-col items-center justify-center z-20">
            <h2 className="font-bold text-2xl mb-4">Gift Apartment | Sign Up </h2>
            <div className="grid gap-4 w-full">
                {inputs.map((d,i) => {
                    const {type,name,placeholder,required,minLength} = d
                    return(
                        <Input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        minLength={minLength}
                        onChange={handleChange}
                        // className="border-2 border-slate-900 font-semibold px-2 py-1 rounded-sm"
                        />
                    )
                })}
                <Select 
                onValueChange={(value) => {
                    setUser((prevUser) => ({
                        ...prevUser,
                        apartment:value
                    }))
                }}
                className='my-4 text-slate-900'>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select an apartment" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Apartments</SelectLabel>
                    {apartments.map((d) => {
                        const {id,name} = d
                        return(
                            <SelectItem name='apartment' key={name} value={name} className=''>{name}</SelectItem>
                        )
                    })}
                    </SelectGroup>
                </SelectContent>
                </Select>
            </div>
            <button className="px-2 py-2 rounded-sm bg-blue-800 text-white w-full h-fit my-5">
                Sign up
            </button>
            <div className="flex w-full gap-2 justify-end">
                <Link className="hover:text-blue-800" href='/login'>Log In </Link>
            </div>
        </form>
    </div>
  )
}

export default page
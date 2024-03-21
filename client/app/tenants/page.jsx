'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {EllipsisIcon} from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  
import { useState } from 'react'

const page = () => {
    const [search,setSearch] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [apartment,setApartment] = useState('')
    const [createModal,setCreateModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [selected,setSelected] = useState('')
    const tenantData = [
        {
            name:'Jemimah',
            apartment:'1A',
            phone:'0111208611',
            email:'jemi@gmail.com',
        },
        {
            name:'Jemimah',
            apartment:'1A',
            phone:'0111208611',
            email:'jemi@gmail.com',
        },
        {
            name:'Jemimah',
            apartment:'1A',
            phone:'0111208611',
            email:'jemi@gmail.com',
        },
        {
            name:'Jemimah',
            apartment:'1A',
            phone:'0111208611',
            email:'jemi@gmail.com',
        },
        {
            name:'Lewis',
            apartment:'1A',
            phone:'0111208611',
            email:'jemi@gmail.com',
        },
    ]
    const filteredData = search.length > 3 ? tenantData.filter((tenant) => {
        const {name} = tenant
        return (name.includes(search))
    })
    :
    tenantData

    const handleCreate = () => {
        const newUser = {
            email,
            phone,
            name,
            apartment
        } 
        console.log(newUser)
        setCreateModal(false)
    }
    const handleUpdate = () => {}
    const handleDelete= () => {}
    
    
  return (
    <div>
        <div className='flex items-center gap-4'>
            <Input
            className='border-black w-[500px]'
            placeholder='Search Tenant'
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={() => setCreateModal(true)}>Create</Button>
        </div>
        <div className='w-[800px] grid grid-cols-2 gap-3 divide-y-2 mt-5'>
            {filteredData.map((d,i) => {
                const {name,apartment,phone,email} = d
                return(
                    <div
                    className="flex items-center justify-between p-4 rounded-sm shadow-sm bg-blue-800 text-white font-semibold" 
                    key={i}>
                        <div>
                            <p>{name}</p>
                        </div>
                        <div>
                            <p>{apartment}</p>
                        </div>
                        <div>
                        <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisIcon className='cursor-pointer'/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => {
                                setSelected({name,apartment,phone,email})
                                setEditModal(true)
                            }}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDelete} className='text-destructive'>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                        </div>
                    </div>

                )
            })}
        </div>
        {createModal && (
            <div className='flex items-center justify-center bg-blue-800/80 fixed top-0 bottom-0 right-0 left-0'>
                <Card className='bg-white w-[450px]'>
                <CardHeader>
                    <CardTitle>Create Tenant</CardTitle>
                    <CardDescription>Fill in the details correctly</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <Input
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                    placeholder='Phone'
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    <Select
                    onValueChange={(value) => setApartment(value)}
                    >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Apartment" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1a">1A</SelectItem>
                        <SelectItem value="1b">1B</SelectItem>
                        <SelectItem value="1c">1C</SelectItem>
                    </SelectContent>
                    </Select>

               </CardContent>
                <CardFooter className='flex items-center gap-4'>
                    <Button
                    onClick={() => setCreateModal(false)}
                    >Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </CardFooter>
                </Card>

            </div>

        )}
        {editModal && (
            <div className='flex items-center justify-center bg-blue-800/80 fixed top-0 bottom-0 right-0 left-0'>
                <Card className='bg-white w-[450px]'>
                <CardHeader>
                    <CardTitle>Update {selected.name}</CardTitle>
                    <CardDescription>Fill in the details correctly</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <Input
                    placeholder='Name'
                    value={selected.name}
                    />
                    <Input
                    placeholder='Email'
                    value={selected.email}
                    />
                    <Input
                    placeholder='Phone'
                    value={selected.phone}
                    />
                    <Select
                    defaultValue={selected.apartment}
                    onValueChange={(value) => setApartment(value)}
                    >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Apartment" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1a">1A</SelectItem>
                        <SelectItem value="1b">1B</SelectItem>
                        <SelectItem value="1c">1C</SelectItem>
                    </SelectContent>
                    </Select>

               </CardContent>
                <CardFooter className='flex items-center gap-4'>
                    <Button
                    onClick={() => setEditModal(false)}
                    >Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </CardFooter>
                </Card>

            </div>

        )}
    </div>
  )
}

export default page
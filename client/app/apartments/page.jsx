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
  
import axios from 'axios'
  
import { useState,useEffect } from 'react'

const page = () => {
    const aparmentOptions = ['bedsitter','one bedroom','two bedroom','studio']
    const [search,setSearch] = useState('')
    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [price,setPrice] = useState('')
    const [createModal,setCreateModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [selected,setSelected] = useState('')
    const [data,setData] = useState([])
    useEffect(() => {
        const getApartments = async () => {
            const res = await axios.get('http://localhost:8000/apartments')
            console.log(res.data.apartments)
            setData(res.data.apartments)
        }
        getApartments()
    },[])
    const apartmentData = [
        {
            name:'1A',
            type:'Bedsitter',
            price:'8000'
        },
        {
            name:'2A',
            type:'Bedsitter',
            price:'9000'
        },
        {
            name:'3A',
            type:'Bedsitter',
            price:'9000'
        },
        
    ]
    const filteredData = search.length > 3 ? data.filter((apartment) => {
        const {name} = apartment
        return (name.includes(search))
    })
    :
    data

    const handleCreate = async () => {
        const newUser = {
            name,
            type,
            rent:price
        } 
        console.log(newUser)
        const res = await axios.post(
            'http://localhost:8000/apartment',
            newUser
        )
        console.log(res)
        setCreateModal(false)
    }
    const handleUpdate = async () => {
        const newUser = {
            name:selected.name,
            rent:price
        } 
        console.log(newUser)
        const res = await axios.put(
            'http://localhost:8000/apartment',
            newUser
        )
        console.log(res)
        setEditModal(false)
    }
    const handleDelete= async (e) => {
        const id = e.target.id
        const res = await axios.delete(
            `http://localhost:8000/apartment/${id}`,
        )
        console.log(res)
    }
    
    
  return (
    <div>
        <div className='flex items-center gap-4'>
            <Input
            className='border-black w-[500px]'
            placeholder='Search Apartment'
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={() => setCreateModal(true)}>Create</Button>
        </div>
        <div className='w-[800px] grid grid-cols-2 gap-3 divide-y-2 mt-5'>
            {filteredData.map((d,i) => {
                const {id,name,type,rent} = d
                return(
                    <div
                    className="flex items-center justify-between p-4 rounded-sm shadow-sm bg-blue-800 text-white font-semibold" 
                    key={i}>
                        <div>
                            <p>{name}</p>
                        </div>
                        <div>
                            <p>{type}</p>
                        </div>
                        <div>
                        <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisIcon className='cursor-pointer'/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => {
                                setSelected({name,type,rent})
                                setEditModal(true)
                            }}>Edit</DropdownMenuItem>
                           
                                <Button id={id} onClick={handleDelete}>Delete</Button>
                            
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
                    <CardTitle>Create Apartment</CardTitle>
                    <CardDescription>Fill in the details correctly</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <Input
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                    placeholder='Price'
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    <Select
                    onValueChange={(value) => setType(value)}
                    >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Apartment" />
                    </SelectTrigger>
                    <SelectContent>
                        {aparmentOptions.map((d,i) => {
                            <SelectItem value={d}>{d}</SelectItem>
                        })}
                        
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
                    placeholder={`Kshs. ${selected.rent}`}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    />
                    <Input
                    placeholder='Price'
                    value={`Kshs. ${selected.type}`}
                    />

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
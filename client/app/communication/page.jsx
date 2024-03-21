import { Input } from '@/components/ui/input'
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
import {SendHorizonalIcon} from 'lucide-react'
import { Button } from '@/components/ui/button'

const page = () => {
  const messagesHistory = [
    {
      sender:'Jemimah',
      receipeint:'Ron',
      message:'Hello world',
      date:Date.now()
    },
    {
      sender:'Jemimah',
      receipeint:'Ron',
      message:'Hello world',
      date:Date.now()
    },
    {
      sender:'Jemimah',
      receipeint:'Ron',
      message:'Hello world',
      date:Date.now()
    },
    {
      sender:'Jemimah',
      receipeint:'Ron',
      message:'Hello world',
      date:Date.now()
    },
  ]

  console.log(messagesHistory[0].date)
  return (
    <div className='flex items-start px-10'>
      <div className='w-3/4'>
        {messagesHistory.length < 1 ?
        <p>No current messages</p>
        :
        <div className='w-[500px] grid gap-4'>
          {
            messagesHistory.map((d,i) => {
              const {sender,receipeint,message,date} = d
              return(
                <div key={i} className='font-semibold p-4 rounded-sm shadow-md '>
                  <div className='flex items-center justify-between'>
                    <p>
                      {receipeint}
                    </p>
                    <span className='text-black/80'>{date.toLocaleString()}</span>
                  </div>
                    <span>
                      {message}
                    </span>
                </div>
              )
            })
          }
        </div>
        }
      </div>
      <div >
    <Card className='bg-white w-[450px]'>
      <CardHeader>
          <CardTitle>Communicate with clarity</CardTitle>
          <CardDescription>Fill in the details correctly</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
          
          <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Notification Type" />
          </SelectTrigger>
          <SelectContent>
              <SelectItem value="reminder">Remider</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="notify">Notify</SelectItem>
          </SelectContent>
          </Select>
          <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Users" />
          </SelectTrigger>
          <SelectContent>
              <SelectItem value="all">All users</SelectItem>
              <SelectItem value="Lewis">Lewis</SelectItem>
              <SelectItem value="Jemimah">Jemimah</SelectItem>
              <SelectItem value="Ron">Ron </SelectItem>
          </SelectContent>
          </Select>
          <Input
          placeholder='Message'
          />

      </CardContent>
      <CardFooter className='flex items-center gap-4'>
          <Button
          >Cancel</Button>
          <Button>
            <SendHorizonalIcon/>
          </Button>
      </CardFooter>
      </Card>
      </div>
    </div>
  )
}

export default page
import { Button } from '@/components/ui/button'
import {Requests,Revenue} from '../../components/cards'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const page = () => {
  return (
  <Tabs defaultValue="payments " className="w-[700px]">
  <TabsList className='flex items-center gap-4 my-4'>
    <TabsTrigger value="payments">Payments</TabsTrigger>
    <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
  </TabsList>
    <TabsContent value="payments">
      <Button className='mb-5'>Generate Report</Button>
      <Revenue/>
    </TabsContent>
    <TabsContent value="maintenance">
      <Button className='mb-5'>Generate Report</Button>
      <Requests/>
    </TabsContent>
  </Tabs>
  )
}

export default page
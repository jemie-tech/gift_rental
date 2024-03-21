import {Occupancy,Payments,Requests,Revenue} from '@/components/cards'

const page = () => {
 
  return (
    <div className="grid grid-cols-2 gap-5">
      <Revenue/>
      <Payments/>
      <Requests/>
      <Occupancy/>
      
    </div>
  )
}

export default page
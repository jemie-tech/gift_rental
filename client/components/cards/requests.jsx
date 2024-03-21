import React from 'react'
import {ListTodoIcon} from 'lucide-react'

const Requests = () => {
    const tenantData = [
        {
          description: 'Fix the lights in the elevator',
          period:"2 days ago",
          status:"overdue"
        },
        {
          description: 'Fix the lights in the elevator',
          period:"2 days ago",
          status:"not started"
        },
        {
          description: 'Fix the lights in the elevator',
          period:"2 days ago",
          status:"progress"
        },
        
        
      ];
  return (
    <div className="bg-white shadow-md p-4 rounded-sm">
        <div>
          <h2 className="font-semibold text-lg">Recent tenant requests</h2>
        </div>
        <div className="grid gap-3 mt-2 divide-y-2">
          {
            tenantData.map((d,i) => {
              const {description,period,status} = d
              return(
                <div key={i} className="flex font-semibold items-center justify-between ">
                  <div className='flex items-center gap-2'>
                    <div className='bg-emerald-800 p-2 text-white rounded-sm'>
                      <ListTodoIcon/>
                    </div>
                    <div className="grid gap-1 ">
                      <h2 className="text-lg">{description}</h2>
                      <span className="text-sm text-black/80 font-medium">{period}</span>
                    </div>
                  </div>
                  <div>
                    <p className={`
                    ${status == 'progress' && 'text-blue-800'}
                    ${status == 'overdue' && 'text-red-800'}
                    ${status == 'not started' && 'text-gray-800'}
                    `}>{status}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Requests
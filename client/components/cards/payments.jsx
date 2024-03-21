import {HandCoinsIcon} from 'lucide-react'

const Payments = () => {
    const paymentData = [
        {
          name: 'Jemimah Asiko',
          period:"2 days ago",
          amount:'15000'
        },
        {
          name: 'Lewis Gitonga',
          period:"1 days ago",
          amount:'10000'
        },
        {
          name: 'Ron Mbatia',
          period:"3 days ago",
          amount:'15000'
        },
        
      ];
  return (
    <div className="bg-white shadow-md p-4 rounded-sm">
        <div>
          <h2 className="font-semibold text-lg">Recent Payments received</h2>
        </div>
        <div className="grid gap-3 mt-2 divide-y-2">
          {
            paymentData.map((d,i) => {
              const {name,period,amount} = d
              return(
                <div key={i} className="flex font-semibold items-center justify-between ">
                  <div className='flex items-center gap-2'>
                    <div className='bg-emerald-800 p-2 text-white rounded-sm'>
                      <HandCoinsIcon/>
                    </div>
                    <div className="grid gap-1 ">
                      <h2 className="text-lg">{name}</h2>
                      <span className="text-sm text-black/80 font-medium">{period}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-emerald-800">Kshs {amount}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Payments
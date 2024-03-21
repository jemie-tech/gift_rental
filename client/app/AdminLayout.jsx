'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const AdminLayout = ({children}) => {
  const menu = [
    {
      name:'Dashboard',
      link:'/'
    },
    {
      name:'Tenants',
      link:'/tenants'
    },
    {
      name:'Apartments',
      link:'/apartments'
    },
    {
      name:'Communication',
      link:'/communication'
    },
    {
      name:'Reports',
      link:'/reports'
    },
  ]
  const pathName = usePathname()
  return (
    <div
    className="flex h-screen bg-white" 
    >
      <div className="bg-blue-900 flex flex-col px-4 py-8 h-screen w-[250px] rounded-r-lg text-white">
        <div>
          <h2 className="font-bold text-2xl">
            Gift Apartment
          </h2>
        </div>
        <div className="flex flex-col gap-5 font-semibold text-white/80 mt-8">
          {menu.map((d,i) => {
            const {name,link} = d
            const path =  pathName.endsWith(link)
            return(
              <Link
              className={`${path && 'text-white'}`} 
              key={i} href={link}>{name}</Link>
            )
          })}
        </div>
      </div>
      <div className="w-full">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-black/80">Hi, Jemimah</h2>
            <h3 className="font-bold text-xl">Welcome Back !</h3>
            <div className="w-full border-2 border-slate-900 mt-2">

            </div>
          </div>
          <section className="mx-auto max-w-6xl">
            {children}
          </section>
      </div>
    </div>
  )
}

export default AdminLayout
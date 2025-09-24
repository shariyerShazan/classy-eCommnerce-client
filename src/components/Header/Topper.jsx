import React from 'react'
import { Link } from 'react-router'


const Topper = () => {
  return (
        <div className='top-stripe border-y-1 py-2 border-y-gray-300'>
             <div className='container' >
                   <div className='flex items-center justify-between '>
                         <div className='col-1 w-[50%] '>
                            <p className='text-sm '>Get up to 50% of new season styles, limited time only</p>
                         </div>
                         <div className='col-2 justify-end items-center'>
                               <ul className='flex items-center gap-4'>
                                   <li className='list-none'>
                                      <Link to={"/#"} className=' text-md hover:text-primary cursor-pointer duration-300 transition-all px-4 border-r-1 border-r-gray-300'>Help Center</Link>
                                   </li>
                                   <li className='list-none'>
                                      <Link to={"/#"} className=' text-md hover:text-primary cursor-pointer duration-300 transition-all '>Order Tracking</Link>
                                   </li>
                               </ul>
                         </div>
                   </div>
             </div>
        </div>
  )
}

export default Topper

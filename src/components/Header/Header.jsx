import React from 'react'
import { Link } from 'react-router'


const Header = () => {
  return (
    <header>
        <div className='top-stripe border-y-1 py-2 border-y-gray-400'>
             <div className='container' >
                   <div className='flex items-center justify-between '>
                         <div className='col-1 w-[50%] '>
                            <p className='text-md '>Get up to 50% of new season styles, limited time only</p>
                         </div>
                         <div className='col-2 justify-end items-center'>
                               <ul>
                                   <li className='list-none'>
                                      <Link to={"/help"}>Help Center</Link>
                                   </li>
                               </ul>
                         </div>
                   </div>
             </div>
        </div>
    </header>
  )
}

export default Header

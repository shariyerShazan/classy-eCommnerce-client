import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router';
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import CategoryDrawer from './CategoryDrawer';

const Navigation = () => {
    const [openCtg , setOpenCtg] = useState(false)
    const openCategory = ()=>{
        setOpenCtg((prev)=> !prev)
    }
  return (
    <>
    <nav  className='border-b-1 border-gray-300'>
        <div className='container flex items-center justify-between'>
             <div className='col-1 py-2 flex'>
                   <Button onClick={openCategory} className='!text-black   !flex !gap-2 '>
                   <CgMenuLeftAlt size={20}/>
                      Shop By Categories
                      <TfiAngleDown className='ml-12' size={20}/>
                   </Button>
                   <p className='border-r-2 mx-6 border-r-gray-300'>
                    
                   </p>

{/* ------------------------categories */}
                   <div className='categories'>
                    <ul className="h-full flex gap-2">
                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}  component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Home </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}  component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Fashion </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button sx={{ textTransform: 'capitalize' }}  component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Electronics </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}   component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Bags </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}   component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Footwear </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}   component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Groceries </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}   component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Beauty </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}   component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Wellness </Button> 
                          </li> 

                          <li className='list-none'>
                               <Button  sx={{ textTransform: 'capitalize' }}   component={Link}    to="/" disableElevation   className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2" > Jewellery </Button> 
                          </li> 
                     </ul>
             </div>
             </div>
             
             <div className='col-2 flex gap-3 items-center text-sm'>
                <HiOutlineRocketLaunch size={18}/> Free International Delivery
             </div>
        </div>
    </nav>
    <CategoryDrawer openCtg={openCtg} setOpenCtg={setOpenCtg}/>
 </>
  )
}

export default Navigation

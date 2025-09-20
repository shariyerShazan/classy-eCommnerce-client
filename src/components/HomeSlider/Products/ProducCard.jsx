import React from 'react'
import { Link } from 'react-router'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoGitCompareOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

const ProducCard = () => {
   
      
  return (
    <div className='py-6 productcard rounded-md group relative'>
         <div className='imageWrapper w-[100%] h-[400px] border-1 border-gray-300 overflow-hidden rounded-lg hover:shadow-md'>
                    <div
                    className="absolute z-50 right-2 top-14 flex flex-col items-center gap-2 
                    opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-500"
                    >
                    <button className="p-2 rounded-full hover:bg-primary bg-white hover:text-white cursor-pointer shadow">
                        <AiOutlineFullscreen size={20} />
                    </button>
                    <button className="p-2 rounded-full hover:bg-primary bg-white hover:text-white cursor-pointer shadow">
                        <IoGitCompareOutline size={20} />
                    </button>
                    <button className="p-2 rounded-full hover:bg-primary bg-white hover:text-white cursor-pointer shadow">
                        <LuHeart size={20} />
                    </button>
                    </div>
             {/* </div> */}
              <Link className='relative' to={"#"}>
              <img src="https://serviceapi.spicezgold.com/download/1753711304616_zoom_1-1677748187.jpg" alt="" className='w-full h-[50%] rounded-t-md object-cover object-top'/>
               <p className='w-max p-[2px] rounded-sm  bg-primary text-white absolute top-2 left-2'>
                   10%
               </p>
              </Link >

               <div className='p-2.5 py-6 flex flex-col gap-1'>
                  <h3 className=' text-gray-600'>Company name</h3>
                   <Link className=' hover:text-primary' to={"#"}> Lorem ipsum dolor sit amet....</Link>
                   <Rating name="read-only" size="small" value={4} disabled />
                   <div className='flex justify-between'>
                        <p className='line-through text-gray-600'>$120</p>
                        <p className='line-through text-primary '>$100</p>
                   </div>
                   
               </div>
                 <div className='px-2'>
                 <Button className='!bg-white !border-primary hover:!bg-black hover:!border-black !w-full !border-1 hover:!text-white !text-primary '>
                    <IoCartOutline  size={20} className='mr-2'/>
                       ADD TO CART
                   </Button>
                 </div>
         </div>
    </div>
  )
}

export default ProducCard

import React from 'react'
import { Link } from 'react-router'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoCartOutline, IoGitCompareOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from 'react-icons/ai';
import { LuHeart } from 'react-icons/lu';

const ProductCardTwo = () => {
  return (
    <div className="flex border h-[40vh]  group border-gray-300 rounded-md overflow-hidden hover:shadow-md transition-all duration-300">
      

      {/* Left Image Part */}
      <div className="w-[30%] relative">
        <Link to={"#"}>
          <img 
            src="https://serviceapi.spicezgold.com/download/1753711304616_zoom_1-1677748187.jpg" 
            alt="Product" 
            className="w-full h-full object-cover object-top"
          />
          <p className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-0.5 rounded-sm">
            10%
          </p>
        </Link>

         
          {/*hover buttons  */}
                   <div
                          className="absolute z-40 right-2 top-14 flex flex-col items-center gap-2 
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
      </div>

      {/* Right Content Part */}
      <div className="w-[70%] flex flex-col items-start justify-center p-6  gap-3">
        
        <h3 className="text-gray-600 text-sm">Company name</h3>
        
        <Link className="hover:text-primary font-medium" to={"#"}>
          Lorem ipsum dolor sit amet. 
        </Link>

        {/* description */}
        <p className='text-sm text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis illo neque. Voluptas in reprehenderit amet nesciunt assumenda, illum modi adipisci dolores earum at, accusamus nihil dicta molestias, sit unde!</p>
        
        <Rating name="read-only" size="small" value={4} disabled />
        
        <div className="flex items-center gap-5">
          <p className="line-through text-gray-600 text-sm">$120</p>
          <p className="text-primary font-semibold">$100</p>
        </div>

        <Button className="!bg-white !border-primary hover:!bg-black hover:!border-black !w-max !px-6 !border !text-primary hover:!text-white">
          <IoCartOutline size={18} className="mr-2" />
          ADD TO CART
        </Button>
      </div>
    </div>
  )
}

export default ProductCardTwo

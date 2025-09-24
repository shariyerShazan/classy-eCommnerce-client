import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { TfiGift } from "react-icons/tfi";
import { FaTeamspeak } from "react-icons/fa";

const FooterTopForHome = () => {
  return (
    <div className='bg-gray-50 py-12'>
            <div className='w-[80%] mx-auto grid grid-cols-5'>
                <div className='flex flex-col gap-3 group cursor-pointer items-center'>
                  <LiaShippingFastSolid size={40} className='group-hover:-translate-y-2 transition-all duration-300 group-hover:text-primary' />
                  <h3 className='text-lg font-semibold'>Free Shipping</h3>
                  <p className='text-sm text-gray-600'>For all Orders Over $100</p>
 
                </div>


                <div className='flex flex-col gap-3 group cursor-pointer items-center'>
                  <PiKeyReturnLight size={40} className='group-hover:-translate-y-2 transition-all duration-300 group-hover:text-primary' />
                  <h3 className='text-lg font-semibold'>30 Days Returns</h3>
                  <p className='text-sm text-gray-600'>For an Exchange Product</p>
 
                </div>



                <div className='flex flex-col gap-3 group cursor-pointer items-center'>
                  <MdOutlinePayments size={40} className='group-hover:-translate-y-2 transition-all duration-300 group-hover:text-primary' />
                  <h3 className='text-lg font-semibold'>  Secured Payment</h3>
                  <p className='text-sm text-gray-600'>Payment Cards Accepted</p>
               </div>



                <div className='flex flex-col gap-3 group cursor-pointer items-center'>
                  <TfiGift size={40} className='group-hover:-translate-y-2 transition-all duration-300 group-hover:text-primary' />
                  <h3 className='text-lg font-semibold'>Special Gifts</h3>
                  <p className='text-sm text-gray-600'>Our First Product Order</p>
 
                </div>




                <div className='flex flex-col gap-3 group cursor-pointer items-center'>
                  <FaTeamspeak size={40} className='group-hover:-translate-y-2 transition-all duration-300 group-hover:text-primary' />
                  <h3 className='text-lg font-semibold'>Support 24/7</h3>
                  <p className='text-sm text-gray-600'> Contact us Anytime</p>
 
                </div>
                

            </div>
    </div>
  )
}

export default FooterTopForHome

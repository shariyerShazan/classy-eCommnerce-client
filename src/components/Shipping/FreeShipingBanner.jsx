import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import Button from '@mui/material/Button';
import PopularProducts from '../Products/HomePageViews/PopularProducts';

const FreeShipingBanner = () => {
  return (
    <div className='bg-white py-12'>
      <PopularProducts />
        <div className='container'>
            <div className='w-[85%] py-5 px-8 mx-auto border-2 border-primary flex justify-between items-center rounded-lg'>
                 <div className='flex items-center gap-4 text-xl font-semibold'>
                    <LiaShippingFastSolid size={50}/>
                    <p>FREE SHIPPING</p>
                 </div>
                 <p className='text-sm '>
                   Free Delivery Now On Your First Order and over $200
                 </p>
                 <p className='text-3xl font-extrabold'>
                 - Only $200*
                 </p>
            </div>
        </div>
    
     <div className='py-12 text-right container grid grid-cols-2 sm:grid-cols-4  justify-between items-center gap-2'>

    {/* one card */}
                    <div className=" group relative rounded-sm overflow-hidden shadow-lg">
                      {/* Image */}
                      <img
                        src="./shipp-women.jpg"
                        alt="shipping card"
                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Content */}
                      <div className="absolute top-1/2 right-[5%] w-[65%] -translate-y-1/2 flex flex-col items-end gap-3  p-4 rounded-lg">
                        <p className=" font-semibold text-gray-800 leading-snug text-right">
                          Buy Women Products <br /> With Low Price
                        </p>
                        <p className="text-lg text-primary font-bold text-right">$100</p>
                        <Button
                          variant="link"
                          className="!text-black hover:!text-primary !underline !p-0 !text-lg !text-right"
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </div>


{/* second card */}
                    <div className="  group relative rounded-sm overflow-hidden shadow-lg">
                      {/* Image */}
                      <img
                        src="./shipp-bag.png"
                        alt="shipping card"
                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Content */}
                      <div className="absolute top-1/2 left-[5%] w-[65%] -translate-y-1/2 flex flex-col items-start gap-3  p-4 rounded-lg">
                        <p className=" font-semibold text-gray-800 leading-snug text-left">
                          Buy Men Bags <br /> With Low Price
                        </p>
                        <p className="text-lg text-primary font-bold text-left">$100</p>
                        <Button
                          variant="link"
                          className="!text-black hover:!text-primary !underline !p-0 !text-lg !text-start"
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </div>


                    {/* third card */}
                    <div className=" group relative rounded-sm overflow-hidden shadow-lg">
                      {/* Image */}
                      <img
                        src="./shipp-footwear.jpg"
                        alt="shipping card"
                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Content */}
                      <div className="absolute top-1/2 right-[5%] w-[50%] -translate-y-1/2 flex flex-col items-end gap-3  p-4 rounded-lg">
                        <p className=" font-semibold text-gray-800 leading-snug text-right">
                          Buy Footwear <br /> With Low Price
                        </p>
                        <p className="text-lg text-primary font-bold text-right">$100</p>
                        <Button
                          variant="link"
                          className="!text-black hover:!text-primary !underline !p-0 !text-lg !text-right"
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </div>

                    {/* fourth card */}
                    <div className=" group relative rounded-sm overflow-hidden shadow-lg">
                      {/* Image */}
                      <img
                        src="./shipp-phone.jpg"
                        alt="shipping card"
                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Content */}
                      <div className="absolute top-1/2 left-[5%] w-[65%] -translate-y-1/2 flex flex-col items-start gap-3  p-4 rounded-lg">
                        <p className=" font-semibold text-gray-800 leading-snug text-left">
                          Buy Apple Phones <br /> With Low Price
                        </p>
                        <p className="text-lg text-primary font-bold text-left">$100</p>
                        <Button
                          variant="link"
                          className="!text-black hover:!text-primary !underline !p-0 !text-lg !text-left"
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </div>
               
        </div>
      
    </div>
  )
}

export default FreeShipingBanner

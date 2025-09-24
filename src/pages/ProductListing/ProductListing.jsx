import React from 'react'
// import ListByCategory from './child/ListingSorting'
import ListingSorting from '../../components/HomeSlider/Products/ProductListing/ListingSorting'
import ShowListing from '../../components/HomeSlider/Products/ProductListing/ShowListing'

const ProductListing = () => {
  return (
    <div className='grid grid-cols-5 gap-10 container'>
       <div >
           <ListingSorting /> 
       </div>
        <div className='col-span-4'>
             <ShowListing />
        </div>
    </div>
  )
}

export default ProductListing

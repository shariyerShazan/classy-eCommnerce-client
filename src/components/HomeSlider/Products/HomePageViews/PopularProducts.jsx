import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../ProductSlider';
const PopularProducts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className='pb-12  container '>
                <div className='flex justify-between pb-4'>
                        <div>
                            <h3 className='text-xl font-semibold text-gray-600'>Popular Products</h3>
                            <p className='text-sm'> Do not miss the current offers until the end of Januray.</p>
                        </div>

                        {/* tabs */}
                        <div>
                        <Box sx={{ maxWidth: { xs: 320, sm: 780 }, bgcolor: 'background.paper' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Fashion" />
                                <Tab label="Electronics" />
                                <Tab label="Bags" />
                                <Tab label="Footwear" />
                                <Tab label="Groceries" />
                                <Tab label="Beauty" />
                                <Tab label="Wellness" />
                                <Tab label="Jewellery" />
                                {/* <Tab label="Item nine" />
                                <Tab label="Item ten" /> */}
                            </Tabs>
                            </Box>
                        </div>
                </div>
                <ProductSlider />
    </div>
  )
}

export default PopularProducts

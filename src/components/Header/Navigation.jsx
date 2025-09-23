import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { CgMenuLeftAlt } from "react-icons/cg";
import { TfiAngleDown } from "react-icons/tfi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import CategoryDrawer from './CategoryDrawer';

const Navigation = () => {
    const [openCtg , setOpenCtg] = useState(false)
    const openCategory = ()=>{
        setOpenCtg(prev => !prev)
    }

    return (
    <>
    <nav className='border-b border-gray-300'>
        <div className='container flex items-center justify-between'>
            
            <div className='col-1 py-2 flex items-center'>
            <Button onClick={openCategory} className='!text-black !py-2 !px-2 !flex !gap-2'>
                   <CgMenuLeftAlt size={20}/>
                      Shop By Categories
                      <TfiAngleDown className='ml-6' size={20}/>
                   </Button>
                   {/* <p className='border-r-2 mr-6  border-r-gray-300'>
                    </p> */}

                {/* Categories */}
                <div className='categories ml-6'>
                    <ul className="h-full flex gap-2">

                        {/* Home */}
                        <li className='list-none'>
                            <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" disableElevation className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2">
                                Home
                            </Button>
                        </li>

                        {/* Fashion */}
                        <li className='list-none relative group'>
                            <Button sx={{ textTransform: 'capitalize' }} disableElevation className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2">
                                Fashion
                            </Button>

                            <div className='sub-menu hidden group-hover:block absolute top-full left-0 min-w-[200px] bg-white shadow-md transition-all duration-300'>
                                <ul>

                                    {/* Men */}
                                    <li className='list-none relative parent'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            Men
                                        </Button>
                                        {/* Men sub-categories */}
                                        <div className='sub-menu hidden parent-hover:block absolute top-0 left-full min-w-[200px] bg-white shadow-md transition-all duration-300'>
                                            <ul>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>T-shirt</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Jeans</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Footwear</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Watch</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Pants</Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* Women */}
                                    <li className='list-none relative parent'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            Women
                                        </Button>
                                        <div className='sub-menu hidden parent-hover:block absolute top-0 left-full min-w-[200px] bg-white shadow-md transition-all duration-300'>
                                            <ul>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Saree</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Tops</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Jeans</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Footwear</Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>Watch</Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* Kids */}
                                    <li className='list-none'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            Kids
                                        </Button>
                                    </li>

                                    {/* Boys */}
                                    <li className='list-none'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            Boys
                                        </Button>
                                    </li>

                                    {/* Girls */}
                                    <li className='list-none'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            Girls
                                        </Button>
                                    </li>

                                </ul>
                            </div>
                        </li>

                        {/* Electronics */}
                        <li className='list-none relative group'>
                            <Button sx={{ textTransform: 'capitalize' }} disableElevation className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2">
                                Electronics
                            </Button>
                            <div className='sub-menu hidden group-hover:block absolute top-full left-0 min-w-[200px] bg-white shadow-md transition-all duration-300'>
                                {["Mobile", "Laptop", "Watch", "Charger"].map(item => (
                                    <li key={item} className='list-none'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            {item}
                                        </Button>
                                    </li>
                                ))}
                            </div>
                        </li>

                        {/* Bags */}
                        <li className='list-none relative group'>
                            <Button sx={{ textTransform: 'capitalize' }} disableElevation className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2">
                                Bags
                            </Button>
                            <div className='sub-menu hidden group-hover:block absolute top-full left-0 min-w-[200px] bg-white shadow-md transition-all duration-300'>
                                {["Men Bags", "Women Bags"].map(item => (
                                    <li key={item} className='list-none'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            {item}
                                        </Button>
                                    </li>
                                ))}
                            </div>
                        </li>

                        {/* Footwear */}
                        <li className='list-none relative group'>
                            <Button sx={{ textTransform: 'capitalize' }} disableElevation className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2">
                                Footwear
                            </Button>
                            <div className='sub-menu hidden group-hover:block absolute top-full left-0 min-w-[200px] bg-white shadow-md transition-all duration-300'>
                                {["Men Footwears", "Women Footwears"].map(item => (
                                    <li key={item} className='list-none'>
                                        <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" className='!text-black !w-full !text-start !justify-start hover:!text-primary'>
                                            {item}
                                        </Button>
                                    </li>
                                ))}
                            </div>
                        </li>

                        {/* Remaining categories without sub-menu */}
                        {["Groceries","Beauty","Wellness","Jewellery"].map(cat => (
                            <li key={cat} className='list-none'>
                                <Button sx={{ textTransform: 'capitalize' }} component={Link} to="/" disableElevation className="!text-sm !text-black hover:!text-primary !transition-all !duration-300 !py-4 !px-2">
                                    {cat}
                                </Button>
                            </li>
                        ))}

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

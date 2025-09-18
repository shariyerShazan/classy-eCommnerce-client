import React from 'react'
// import Topper from './Topper'
import { Link } from 'react-router'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TbShoppingCart } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
// import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Header = () => {
  return (
    <div>
        <div className='header py-3 border-b-1 border-gray-300'>
             <div className='container  flex items-center justify-between'>
                   <div className='col-1 '>
                        <Link to={"/"}>
                        <img src={"/logo.svg"} alt="logo" className='w-54' />
                        </Link>
                   </div>
                   <div className="col-2 w-1/2 relative">
                        <form className="flex w-full" action="">
                            <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 border-2 border-primary rounded-lg focus:outline-none focus:border-2 focus:border-primary"
                            />
                           <Button
                                type="button"
                                className=" !absolute !right-0 !bg-primary !text-white !px-4 !py-[9px] !rounded-l-none !rounded-r-lg  !transition"
                                disableElevation
                                >
                                SEARCH
                         </Button>
                        </form>
                    </div>

                   <div className='col3 flex items-center gap-6'>
                         <ul className='flex items-center gap-3 border-r-2 border-r-gray-300 pr-6'>
                            <li className='list-none'> 
                                <Link to={"/login"} className='hover:text-primary transition-all duration-300 cursor-pointer'> Login</Link>
                            </li>
                            <li className='text-lg'>/</li>
                            <li className='list-none '>
                                <Link to={"/register"} className='hover:text-primary transition-all duration-300 cursor-pointer'> Register</Link>
                            </li>
                         </ul>
                         <ul className='flex items-center gap-3'>
                            <li>
                                <Tooltip title="White List">
                                   <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4}  color="secondary">
                                            <IoMdHeartEmpty size={23}/>
                                        </StyledBadge>
                                 </IconButton>
                                 </Tooltip>
                            </li>
                            <li>
                            <Tooltip title="Cart">
                               <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4}  color="secondary">
                                            <TbShoppingCart size={23} />
                                        </StyledBadge>
                                 </IconButton>
                                </Tooltip>
                            </li>
                         </ul>
                   </div>
             </div>
        </div>
        <Navigation />
    </div>
  )
}

export default Header

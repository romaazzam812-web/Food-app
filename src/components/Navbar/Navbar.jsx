import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { PiBowlFoodFill } from "react-icons/pi";
import { NavLink } from 'react-router';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "bg-[#DBDFD0] px-3 py-3  text-[#474747] font-medium  rounded-full transition"
            : "rounded-full text-[#474747] px-3 py-3 font-medium  hover:bg-[#DBDFD0] transition";

    return (
        <header className=' sticky top-0 z-50 bg-white shadow-sm' >
            <div className="flex items-center justify-between py-4 px-5">
                <div className='flex items-center gap-1.5 text-2xl text-[#474747] font-semibold'>
                    <PiBowlFoodFill className='text-[#AD343E]  ' />
                    <span>Bistro Bliss</span>
                </div>
                <nav className='hidden md:flex space-x-6 '>
                    <NavLink to="/" className={navLinkStyle}>
                        Home</NavLink>
                    <NavLink to="/About" className={navLinkStyle}>
                        About</NavLink>
                    <NavLink to="/Menu" className={navLinkStyle}>
                        Menu</NavLink>
                    <NavLink to="/Pages" className={navLinkStyle}>
                        Pages</NavLink>
                    <NavLink to="/Contact" className={navLinkStyle}>
                        Contact</NavLink>
                </nav>

                <NavLink to="/Book" className='hidden md:block px-5 py-2 rounded-full text-[#182226] font-bold border-[#2C2F24] border-2'>Book A Table</NavLink>


                <button className="md:hidden text-3xl text-[#2C2F24]" onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <HiOutlineX /> : <HiMenu />}</button>
            </div>


            {openMenu && (
                <div className='md:hidden bg-white shadow-lg px-5 py-3'>
                    <nav className="flex flex-col text-center gap-5">
                        <NavLink to="/" className={navLinkStyle} onClick={() => setOpenMenu(false)}>Home</NavLink>
                        <NavLink to="/About" className={navLinkStyle} onClick={() => setOpenMenu(false)}>About</NavLink>
                        <NavLink to="/Menu" className={navLinkStyle} onClick={() => setOpenMenu(false)}>Menu</NavLink>
                        <NavLink to="/Pages" className={navLinkStyle} onClick={() => setOpenMenu(false)}>Pages</NavLink>
                        <NavLink to="/Contact" className={navLinkStyle} onClick={() => setOpenMenu(false)}>Contact</NavLink>
                    </nav>

                    <NavLink to="/Book" className='mt-2 px-5 py-2 block text-center text-[#182226] font-bold' onClick={() => setOpenMenu(false)} ><button >Book A Table</button></NavLink>

                </div>
            )}
        </header >
    )
}

export default Navbar
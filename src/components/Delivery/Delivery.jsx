import React from 'react'
import chef from '../../assets/chef.png'
import food from '../../assets/food.png'
import salads from '../../assets/salads.png'
import { IoMdTime } from "react-icons/io"
import { HiReceiptPercent } from "react-icons/hi2"
import { MdShoppingCart } from "react-icons/md"

function Delivery() {
    return (
        <section className='py-15 bg-[#F9F9F7]'>
            <div className='max-w-7xl mx-auto px-20 grid lg:grid-cols-2 gap-15 items-center'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <img src={chef} className='row-span-2 w-full h-full rounded-2xl object-cover' />
                    <img src={food} className='w-full rounded-2xl object-cover' />
                    <img src={salads} className='w-full rounded-2xl object-cover' />
                </div>

                <div>
                    <h2 className='font-medium text-[#2C2F24] text-5xl leading-tight '>Fastest Food Delivery in City</h2>
                    <p className='text-2xl text-[#414536] mt-5 '>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                    <div className='mt-8 space-y-5'>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center justify-center bg-[#AD343E] rounded-full w-8 h-8'>
                                <IoMdTime className='text-white text-xl' />
                            </div>
                            <h4 className='font-medium text-[#2C2F24] text-2xl'>Delivery within 30 minutes</h4>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center justify-center bg-[#AD343E] rounded-full w-8 h-8'>
                                <HiReceiptPercent className='text-white text-xl' />
                            </div>
                            <h4 className='font-medium text-[#2C2F24] text-2xl'>Best Offer & Prices</h4>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center justify-center bg-[#AD343E] rounded-full w-8 h-8'>
                                <MdShoppingCart className='text-white text-xl' />
                            </div>
                            <h4 className='font-medium text-[#2C2F24] text-2xl'>Online Services Available</h4>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}
export default Delivery
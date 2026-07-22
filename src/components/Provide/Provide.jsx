import provide from '../../assets/provide.png'
import { FaPhone } from "react-icons/fa6"
import { IoMailOutline } from "react-icons/io5"
import { MdOutlineLocationOn } from "react-icons/md"
import { Link } from 'react-router'


function Provide({image,showButton = true}) {
    return (
        <section className='py-15 bg-[#F9F9F7]'>
            <div className='max-w-7xl mx-auto px-20 grid lg:grid-cols-2 gap-50'>

                <div className='relative t w-lg'>
                    <img className='rounded-xl' src={image} />

                    <div className='absolute bottom-0 reigh-10 left-25 text-white bg-[#474747] w-md shadow-xl p-8 rounded-xl '>
                        <h3 className='font-bold text-xl mb-5'>Come and visit us</h3>
                        <div className='space-y-2'>
                            <div className='flex items-center gap-4'>
                                <FaPhone />
                                <p>(414) 857 - 0107</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <IoMailOutline />
                                <p>happytummy@restaurant.com</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdOutlineLocationOn />
                                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6 mr-8'>
                    <h2 className='font-medium text-[#2C2F24] text-5xl '>We provide healthy food for your family.</h2>
                    <p className='font-medium text-[#2C2F24] text-xl mt-3'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                    <p className='text-xl text-[#414536] mt-2 mb-10'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                   {showButton &&( <Link className='px-5 py-3  rounded-full font-bold bg-white border-[#2C2F24] border-2 transition duration-300' to="/About">More About Us</Link> )}
                </div>
            </div>
        </section>
    )
}
export default Provide
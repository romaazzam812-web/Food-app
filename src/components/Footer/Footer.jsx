import { PiBowlFoodFill } from "react-icons/pi"
import { IoLogoTwitter } from "react-icons/io5"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router"
import footer1 from '../../assets/footer1.png'
import footer2 from '../../assets/footer2.png'
import footer3 from '../../assets/footer3.png'
import footer4 from '../../assets/footer4.png'


function Footer() {
    return (
        <footer className='bg-[#474747] text-white pt-20 pb-8'>
            <div className='max-w-7xl mx-auto px-13 grid lg:grid-cols-4 md:grid-cols-2  gap-15'>
                <div>
                    <div className='flex items-center gap-1.5 text-3xl  font-semibold'>
                        <PiBowlFoodFill />
                        <span>Bistro Bliss</span>
                    </div>
                    <p className="mt-5 text-[#ADB29E] leading-7">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                    <div className="flex mt-6 gap-3">
                        <a href="#" className="rounded-full p-1 bg-[#AD343E] flex items-center justify-center text-white hover:bg-white hover:text-[#AD343E] transition"><IoLogoTwitter /></a>
                        <a href="#" className="rounded-full p-1 bg-[#AD343E] flex items-center justify-center text-white hover:bg-white hover:text-[#AD343E] transition"><FaFacebookF /></a>
                        <a href="#" className="rounded-full p-1 bg-[#AD343E] flex items-center justify-center text-white hover:bg-white hover:text-[#AD343E] transition"><FaInstagram /></a>
                        <a href="#" className="rounded-full p-1 bg-[#AD343E] flex items-center justify-center text-white hover:bg-white hover:text-[#AD343E] transition"><FaGithub /></a>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-white text-2xl mb-5">Pages</h3>
                    <ul className="space-y-4 text-[#DBDFD0]">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li><Link to="/Pricing">Pricing</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Delivery">Delivery</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white text-2xl mb-5">Utility Pages</h3>
                    <ul className="space-y-4 text-[#DBDFD0]">
                        <li><Link to="#">Start Here</Link></li>
                        <li><Link to="#">Styleguide</Link></li>
                        <li><Link to="#">Password Protected</Link></li>
                        <li><Link to="#">404 Not Found</Link></li>
                        <li><Link to="#">Licenses</Link></li>
                        <li><Link to="#">Changelog</Link></li>
                        <li><Link to="#">View More</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white text-xl mb-5">Follow Us On Instagram</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={footer1} className="rounded-xl" />
                        <img src={footer2} className="rounded-xl" />
                        <img src={footer3} className="rounded-xl" />
                        <img src={footer4} className="rounded-xl" />

                    </div>
                   
                </div>

            </div>

              <div className="border-t border-[#414536] text-[#ADB29E] text-center mt-10 pt-8">Copyright © 2023 Hashtag Developer. All Rights Reserved</div>

        </footer>
    )
}


export default Footer
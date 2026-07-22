import Feel from '../../assets/Feel.png'
import { FaPlay } from "react-icons/fa"
import { BiFoodMenu } from "react-icons/bi"
import { VscPreview } from "react-icons/vsc"
import { MdTimer } from "react-icons/md"

function Taste() {
  return (
    <section className='p-10'>
        <div className='relative'>
            <img src={Feel} className='w-full object-cover' />
            <div className='absolute inset-0 bg-black/40  flex flex-col items-center justify-center '>
                <button className='flex items-center justify-center w-15 h-15 bg-white rounded-full hover:scale-110 transition'><FaPlay className='text-[#AD343E]' /></button>
                <h2 className='font-medium text-3xl text-white'>
                    Feel the authentic & <br/>
                    original taste from us</h2>
            </div>
        </div>
        <div className='max-w-7xl max-auto py-10 grid md:grid-cols-3 gap-14 px-5'>
            <div className='flex  gap-3'>
                <div className=' flex items-center justify-center'>
                    <BiFoodMenu className='w-13 h-13 mb-15' />
                </div>
                <div>
                    <h3 className='font-bold text-[#2C2F24] text-xl mb-2'>Multi Cuisine</h3>
                    <p className='text-[#414536]  text-xl'>In the new era of technology we look in the future with certainty life.</p>
                </div>
            </div>
             <div className='flex  gap-3'>
                <div className=' flex items-center justify-center'>
                    <VscPreview className='w-13 h-13 mb-15' />
                </div>
                <div>
                    <h3 className='font-bold text-[#2C2F24] text-xl mb-2'>Easy To Order</h3>
                    <p className='text-[#414536]  text-xl'>In the new era of technology we look in the future with certainty life.</p>
                </div>
            </div>
             <div className='flex  gap-3'>
                <div className=' flex items-center justify-center'>
                    <MdTimer className='w-13 h-13 mb-15' />
                </div>
                <div>
                    <h3 className='font-bold text-[#2C2F24] text-xl mb-2'>Fast Delivery</h3>
                    <p className='text-[#414536]  text-xl'>In the new era of technology we look in the future with certainty life.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Taste
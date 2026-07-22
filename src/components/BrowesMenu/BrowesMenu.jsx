import { BsFillCupHotFill } from "react-icons/bs";
import { BiSolidBowlRice } from "react-icons/bi";
import { RiDrinksLine } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { Link } from 'react-router';

function BrowesMenu() {

   const MenuItems = [
    {
        id: "1",
        icon: <BsFillCupHotFill /> ,
        title: "Breakfast" ,
        description: "In the new era of technology we look in the future with certainty and pride for our life."

    },
     
     
    {
        id: "2",
        icon: <BiSolidBowlRice />,
        title: "Main Dishes" ,
        description: "In the new era of technology we look in the future with certainty and pride for our life."

    },
     
    {
        id: "3",
        icon: <RiDrinksLine />  ,
        title: "Drinks" ,
        description: "In the new era of technology we look in the future with certainty and pride for our life."

    },
     
    {
        id: "4",
        icon: <LuCakeSlice /> ,
        title: "Desserts" ,
        description: "In the new era of technology we look in the future with certainty and pride for our life."

    }
   ]

  return (
    <section className='py-15 bg-white'>
        <div className='max-w-7xl mx-auto px-10'>
            <h2 className='text-center text-[#2C2F24] font-medium text-4xl'>Browse Our Menu</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mx-10 my-10'>
                {MenuItems.map((item) =>(
                    <div  key={item.id}
                    className='border border-[#DBDFD0] rounded-2xl text-center   hover:shadow-xl hover:-translate-y-2 transition-all duration-300'
                    >   
                    <div className='w-24 h-24 rounded-full mt-5 flex items-center justify-center bg-[#DBDFD0] mx-auto text-5xl text-[#474747]'>
                        {item.icon}
                    </div>
                    <h3 className='font-bold text-center text-xl text-[#2C2F24] my-3'>{item.title}</h3>
                    <p className=' font-medium text-[#414536]  mx-2 mb-5'>{item.description}</p>
                    <Link className='font-bold inline-block text-[#AD343E] mb-5 text-center' to="/Menu">Explore Menu</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
export default BrowesMenu
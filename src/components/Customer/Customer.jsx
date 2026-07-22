import { MdDescription } from 'react-icons/md'
import Customer1 from '../../assets/Customer1.png'
import Customer2 from '../../assets/Customer2.png'
import Customer3 from '../../assets/Customer3.png'

function Customer() {
    const Customers = [
        {
            id: 1,
            title: "“The best restaurant”",
            description: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
            name: "Sophire Robson",
            location: "Los Angeles, CA",
            Image: Customer1,
        },

        {
            id: 2,
            title: "“Simply delicious”",
            description: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
            name: "Matt Cannon",
            location: "San Diego, CA",
            Image: Customer2,
        },
        {
            id: 3,
            title: "“One of a kind restaurant”",
            description: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
            name: "Andy Smith",
            location: "San Francisco, CA",
            Image: Customer3,
        },


    ]



    return (
        <section className='py-15 bg-white'>
            <div className='max-w-7xl mx-auto px-18'>
                <h2 className='text-center text-[#2C2F24] font-medium text-4xl py-8'>What Our Customers Say</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3 '>
                    {Customers.map((item) => (
                        <div key={item.id}
                            className='bg-[#F9F9F7] rounded-2xl shadow-sm p-6'
                        >
                            <h3 className='font-bold text-[#AD343E] mb-3'>{item.title}</h3>
                            <p className='text-[#414536] leading-6 pb-5 border-b border-[#DBDFD0]'>{item.description}</p>
                            <div className='flex items-center mt-3 gap-2'>
                                <img src={item.Image} className='rounded-full object-cover' />
                                <div>
                                    <h4 className='font-bold text-[#2C2F24] '>{item.name}</h4>
                                    <p className='text-[#414536]'>{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Customer
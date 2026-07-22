import Caterings from '../../assets/Caterings.png'
import Birthdays from '../../assets/Birthdays.png'
import Weddings from '../../assets/Weddings.png'
import Events from '../../assets/Events.png'

function Service() {

    const services = [
        {
            id: 1,
            Image: Caterings,
            title: "Caterings",
            description: "In the new era of technology we look in the future with certainty for life."

        },

        {
            id: 2,
            Image: Birthdays,
            title: "Birthdays",
            description: "In the new era of technology we look in the future with certainty for life."

        },

        {
            id: 3,
            Image: Weddings,
            title: "Weddings",
            description: "In the new era of technology we look in the future with certainty for life."

        },

        {
            id: 4,
            Image: Events,
            title: "Events",
            description: "In the new era of technology we look in the future with certainty for life."

        },
    ]





    return (
        <section className='p-15 bg-white'>
            <div className='max-w-7xl mx-auto px-6'>
                <h2 className='text-start text-[#2C2F24] mb-10 font-medium text-5xl max-w-xl leading-tight '>We also offer unique services for your events</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3'>
                    {services.map((item) => (
                        <div key={item.id}
                            className='group cursor-pointer'
                        >
                        <div className='overflow-hidden rounded-2xl'>
                              <img src={item.Image} className='w-full object-cover group-hover:scale-105 transition duration-300' />
                        </div>
                        <h3 className='font-bold  text-xl text-[#2C2F24] my-4'>{item.title}</h3>
                        <p className=' font-medium text-[#414536]  mb-5'>{item.description}</p>
                    
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default Service
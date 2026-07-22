import Guest from '../../assets/Guest.png'

function Info() {

    const information = [

        {
            id: 1,
            number: "3",
            title: "Locations",
        },

        {
            id: 2,
            number: "1995",
            title: "Founded",
        },

        {
            id: 3,
            number: "65+",
            title: "Staff Members",
        },

        {
            id: 4,
            number: "100%",
            title: "Satisfied Customers",
        },
    ];

    return (
        <section className='bg-[#F9F9F7]'>
            <div className='max-w-7xl mx-auto p-20 grid lg:grid-cols-2 gap-15 items-center'>
                <div>
                    <h2 className='font-medium text-[#2C2F24] text-5xl mb-5'>A little information for our valuable guest</h2>
                    <p className='text-[#414536] leading-7 mb-12'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        {information.map((item) => (
                            <div
                                key={item.id}
                                className='bg-white border border-[#DBDFD0] rounded-2xl py-7 px-3 text-center'
                            >
                                <h3 className='font-medium text-[#2C2F24] text-5xl mb-1'>{item.number}</h3>
                                <p className='font-medium text-[#414536] '>{item.title}</p>

                            </div>
                        ))}

                    </div>
                </div>
                <div>
                    <img src={Guest} className='rounded-2xl object-cover' />
                </div>
            </div>
        </section>
    )
}
export default Info
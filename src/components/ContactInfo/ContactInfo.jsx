
export default function ContactInfo() {
  return (
    <section className='bg-white py-20'>
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8 '>
            <div>
                <h3 className='text-[#2C2F24] font-bold text-xl mb-3'>Call Us:</h3>
                <p className='text-[#AD343E] font-bold '>+1-234-567-8900</p>
            </div>
            <div>
                <h3 className='text-[#2C2F24] font-bold text-xl mb-3'>Hours:</h3>
                <p className='text-[#2C2F24]'>Mon-Fri: 11am - 8pm </p>
                <p className='text-[#2C2F24]'>Sat, Sun: 9am - 10pm</p>
            </div>
            <div>
                <h3 className='text-[#2C2F24] font-bold text-xl mb-3'>Our Location:</h3>
                <p className='text-[#2C2F24]'>123 Bridge Street </p>
                <p className='text-[#2C2F24]'>Nowhere Land, LA 12345</p>
                <p className='text-[#2C2F24]'>United States</p>
            </div>
        </div>
    </section>
  )
}

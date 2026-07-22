import heroImg from '../../assets/hero.png'
import { Link, } from 'react-router'
function Hero() {

    return (
        <>
            <section className='relative h-[90vh] bg-cover bg-no-repeat flex items-center justify-center' style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='relative z-10 max-w-3xl text-center items-center px-3"'>
                    <h1 className='text-[#2C2F24] font-medium text-6xl md:text-7xl leading-tight'>
                        Best food for
                        <br />
                        your taste
                    </h1>
                    <p className='mt-6 text-[#2C2F24] text-lg leading-8 max-w-2xl mx-auto font-medium'>
                        Discover delectable cuisine and unforgettable moments
                        in our welcoming, culinary haven.
                    </p>

                    <div className='mt-10 flex justify-center gap-4'>
                        <Link to="/Book"
                            className="font-bold px-5 py-2 rounded-full bg-[#AD343E] text-white transition duration-300">Book A Table</Link>
                        <Link to="/Menu"
                            className="px-5 py-2 rounded-full font-bold bg-white border-[#2C2F24] border-2 transition duration-300">Explore Menu</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero
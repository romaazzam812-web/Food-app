import provide from '../../assets/provide.png'
import Hero from '../../components/Hero/Hero'
import BrowesMenu from '../../components/BrowesMenu/BrowesMenu'
import Provide from '../../components/Provide/Provide'
import Service from '../../components/Service/Service'
import Delivery from '../../components/Delivery/Delivery'
import Customer from '../../components/Customer/Customer'
import Blog from '../../components/Blog/Blog'

function Home() {
  return (
   <>
   <Hero />
   <BrowesMenu />
   <Provide image={provide} />
   <Service />
   <Delivery />
   <Customer />
   <Blog />
   </>
  )
}
export default Home
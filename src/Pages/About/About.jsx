import Provide from '../../components/Provide/Provide'
import Customer from '../../components/Customer/Customer'
import aboutProvide from '../../assets/aboutProvide.png'
import Taste from '../../components/Taste/Taste'
import Info from '../../components/Info/Info'
export default function About() {
  return (
    <>
    <Provide
    image={aboutProvide}
     showButton={false} />
     <Taste />
     <Info />
    <Customer />
    </>
  )
}

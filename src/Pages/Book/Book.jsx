import BookForm from '../../components/BookForm/BookForm'
import Map from '../../assets/Map.png'
export default function Book() {
  return (
   <>
  
   <BookForm />
   <section>
    <img src={Map} className='w-full h-full object-cover' />
   </section>
   </>
  )
}

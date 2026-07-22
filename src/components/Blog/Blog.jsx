import { data, Link } from 'react-router'
import recipe1 from '../../assets/recipe1.png'
import recipe2 from '../../assets/recipe2.png'
import recipe3 from '../../assets/recipe3.png'
import recipe4 from '../../assets/recipe4.png'
import recipe5 from '../../assets/recipe5.png'


function Blog() {

  const blogs = [

    {
        id: 1,
        Image: recipe1,
        date:"January 3, 2023",
        title:"The secret tips & tricks to prepare a perfect burger & pizza for our customers",
        description:"Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",


    },

    {
        id: 2,
        Image: recipe2,
        date:"January 3, 2023",
        title:"How to prepare the perfect french fries in an air fryer",
       

    },
     
    {
        id: 3,
        Image: recipe3,
        date:"January 3, 2023",
        title:"7 delicious cheesecake recipes you can prepare",
       

    },
     
    {
        id: 4,
        Image: recipe4,
        date:"January 3, 2023",
        title:"How to prepare delicious chicken tenders",
       

    },
     
    {
        id: 5,
        Image: recipe5,
        date:"January 3, 2023",
        title:"5 great pizza restaurants you should visit this city",
        

    },

  ]




  return (
    <section className='py-10 bg-[#F9F9F7]'>
        <div className='max-w-7xl mx-auto px-10'>
            <div className="flex items-center justify-between mb-6 ">
                <h2 className="text-[#2C2F24] font-medium text-4xl">Our Blog & Articles</h2>
                <Link className="bg-[#AD343E] rounded-full text-white font-bold px-4 py-2" to="/Blog">Read All Articles</Link>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 '>
                <div className='bg-white rounded-2xl overflow-hidden shadow-sm '>
                    <img src={blogs[0].Image} className='w-full object-cover' />
                    <div className='p-5'>
                        <span className='font-medium text-[#737865] text-xl mt-4'>{blogs[0].date}</span>
                        <h3 className='font-medium text-[#2C2F24] mt-4'>{blogs[0].title}</h3>
                        <p className='text-[#2C2F24] leading-6'>{blogs[0].description}</p>
                    </div>
                </div>
                <div className='lg:col-span-2 grid grid-cols-2 gap-6'>
                    {blogs.slice(1).map((blog) =>(
                        <div key={blog.id}
                        className='bg-white rounded-2xl overflow-hidden  shadow-sm  hover:shadow-lg transition duration-300'
                        >
                            <img src={blog.Image} className='w-full object-cover'/>
                            <div className='p-5'>
                                <span className='font-medium text-[#737865] text-xl mt-3'>{blog.date}</span>
                                <h3 className='font-medium text-[#2C2F24] mt-3'>{blog.title}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    </section>
  )
}
export default Blog


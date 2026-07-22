import React, { useContext } from 'react'
import { RecipeContext } from '../../components/Context/RecipeContext'
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import { Link } from 'react-router';

function Blog() {

    const { allRecipes } = useContext(RecipeContext);

    return (

        <>
            <BlogHeader />

            <section className=' py-2 bg-[#F9F9F7]'>
                <div className='max-w-7xl mx-auto px-20'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-10 '>
                        {allRecipes.map((recipe) => (
                            <Link key={recipe.id} to={`/BlogDetails/${recipe.id}`} >
                            <div className="border border-[#DBDFD0] rounded-2xl overflow-hidden hover:shadow-lg transition">
                                <img src={recipe.image} />
                                <div className='p-3'>
                                    <span className='font-medium  text-[#737865] text-xl mt-3'>January 3, 2023</span>
                                    <p className='text-[#414536] leading-7 mt-3'> {recipe.ingredients}</p>
                                </div>
                            </div>
                            </Link>
                        ))}
                </div>
            </div>

        </section >
        </>
    )
}
export default Blog
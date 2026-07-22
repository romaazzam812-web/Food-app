import React, { useContext } from 'react'
import { RecipeContext } from '../Context/RecipeContext'

export default function MenuGallery() {


    const {category, recipes} = useContext(RecipeContext);



  return (
    <section className='py-15 bg-[#F9F9F7]'>
        <div className='max-w-7xl mx-auto px-20'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-10'>
                {recipes.map((recipe) =>(
                    <div key={recipe.id} className="border border-[#DBDFD0] rounded-2xl overflow-hidden hover:shadow-lg transition">
                        <img src={recipe.image} />
                        <div className='p-5 text-center'>
                            <h4 className='text-[#AD343E] font-bold'> ${recipe.caloriesPerServing}</h4>
                            <h3 className='text-[#2C2F24] font-bold mt-3 '>{recipe.name}</h3>
                            <p className='text-[#414536] leading-7 mt-3'> {recipe.ingredients}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

         {recipes.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold text-[#2C2F24]">
              No Recipes Found
            </h2>

            <p className="text-[#737865] mt-4">
              There are no recipes in {category}.
            </p>
          </div>
        )}
    </section>
  )
}



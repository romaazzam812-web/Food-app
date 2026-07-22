import { useContext } from 'react';
import { useParams } from 'react-router'
import { RecipeContext } from '../../components/Context/RecipeContext';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';

function BlogDetails() {

    const { id } = useParams();

    const { allRecipes } = useContext(RecipeContext);

    const recipe = allRecipes.find(
        (item) => item.id === Number(id)
    );

    if (!recipe) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            < DetailsHeader />
            < section className=' py-4 bg-[#F9F9F7]' >
                <div className='max-w-7xl mx-auto px-20 flex flex-col items-center'>
                    <img src={recipe.image} alt={recipe.name} className='w-3xl object-cover rounded-3xl' />
                    <h3 className='text-[#2C2F24] font-bold mt-3 text-3xl'>{recipe.name}</h3>
                    <p className='text-[#414536] leading-7 mt-3'> {recipe.ingredients}</p>
                </div>
            </section >
        </>

    )
}
export default BlogDetails
import React, { useContext } from 'react'
import { RecipeContext } from '../Context/RecipeContext'

export default function CategorySection() {


    const { category, setCategory } = useContext(RecipeContext)

    const handelCategory = (e, category) => {
        e.preventDefault();
        setCategory(category);
    };



    return (
        <section className='py-10'>
            <div className='max-w-7xl mx-auto px-20 flex justify-center gap-3 flex-wrap'>
            <button onClick={() => setCategory("All")} className={`font-bold rounded-full transition duration-300 px-4 py-2 gap-3 ${category === "All"
                ? "bg-[#AD343E] text-white"
                : "bg-white text-[#2C2F24] border border-[#DBDFD0] hover:bg-[#AD343E] hover:text-white"
                }`}
            >
                All
            </button>
            <button onClick={() => setCategory("Breakfast")} className={`font-bold rounded-full transition duration-300 px-4 py-2 ${category === "Breakfast"
                ? "bg-[#AD343E] text-white"
                : "bg-white text-[#2C2F24] border border-[#DBDFD0] hover:bg-[#AD343E] hover:text-white"
                }`}
            >
                Breakfast
            </button>
            <button onClick={() => setCategory("Lunch")} className={`font-bold rounded-full transition duration-300 px-4 py-2 ${category === "Lunch"
                ? "bg-[#AD343E] text-white"
                : "bg-white text-[#2C2F24] border border-[#DBDFD0] hover:bg-[#AD343E] hover:text-white"
                }`}
            >
                Main Dishes
            </button>
            <button onClick={() => setCategory("Drinks")} className={`font-bold rounded-full transition duration-300 px-4 py-2 ${category === "Drinks"
                ? "bg-[#AD343E] text-white"
                : "bg-white text-[#2C2F24] border border-[#DBDFD0] hover:bg-[#AD343E] hover:text-white"
                }`}
            >
                Drinks
            </button>
            <button onClick={() => setCategory("Snack")} className={`font-bold rounded-full transition duration-300 px-4 py-2 ${category === "Snack"
                ? "bg-[#AD343E] text-white"
                : "bg-white text-[#2C2F24] border border-[#DBDFD0] hover:bg-[#AD343E] hover:text-white"
                }`}
            >
                Desserts
            </button>
        </div>
        </section >
    )
}

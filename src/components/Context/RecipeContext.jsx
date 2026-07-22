import { createContext, useEffect, useState } from "react"


export const RecipeContext = createContext()


export default function RecipeProvider({ children }) {

    const [category, setCategory] = useState("All");
    const [allRecipes, setAllRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);



    useEffect(() => {
    
        if (allRecipes.length === 0) {
    
          const getRecipes = async () => {
    
            const res = await fetch("https://dummyjson.com/recipes");
            const data = await res.json();
    
            setAllRecipes(data.recipes);
            setRecipes(data.recipes);
    
          };
          getRecipes();
        }
    
      }, []);
    




    return (
        <RecipeContext.Provider

            value={{
                category,
                setCategory,
                
                allRecipes,
                setAllRecipes,

                recipes,
                setRecipes,
            }}

        >
            {children}

        </RecipeContext.Provider>
    )
}

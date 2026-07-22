import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import RecipeProvider, { RecipeContext } from '../../components/Context/RecipeContext'
import CategorySection from '../../components/CategorySection/CategorySection';
import MenuGallery from '../../components/MenuGallery/MenuGallery';


function MenuContent() {
  const {
    category,
    allRecipes,
    setAllRecipes,
    recipes,
    setRecipes
  } = useContext(RecipeContext);



  useEffect(() => {

    if (category === "All") {

      setRecipes(allRecipes);

    } else {

      const filter = allRecipes.filter((item) =>
        item.mealType.includes(category)

      );

      setRecipes(filter);

    }


  }, [category, allRecipes]);


  return (
    <>
      <Header />
      <CategorySection />
      <MenuGallery />
    </>
  )
}


function Menu() {
  return (

    <MenuContent />
  )
}
export default Menu



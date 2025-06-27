import { Box, Grid } from "@mui/material";
import RecipeCarousel from "../components/recipeCarousal";

export default function SimpleChef() {

const featuredRecipes = [
  {
    title: 'Spaghetti',
    img: 'https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Steak',
    img: 'https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?q=80&w=1063&auto=format&fit=crop',
  },
  {
    title: 'Sushi',
    img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1332&auto=format&fit=crop',
  },
  {
    title: 'Salad Bowl',
    img: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?q=80&w=1972&auto=format&fit=crop',
  },
  {
    title: 'Pizza Margherita',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop',
  },
];

const indyRecipes = [
  {
    title: 'Mac n Cheese',
    img: 'https://images.unsplash.com/photo-1667499989723-c4ab9549d63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8fHww',
  },
  {
    title: 'Corn Bread',
    img: 'https://images.unsplash.com/photo-1630681707119-0b1fd2745b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcm4lMjBicmVhZHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Apple Pie',
    img: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Fried Chicken',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Hamburger',
    img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


return (
    <>
        <RecipeCarousel recipes={featuredRecipes}/>
        <RecipeCarousel recipes={indyRecipes} title="Indiana Locals"/>
    </>
)

}
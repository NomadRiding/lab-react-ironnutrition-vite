import {useState} from 'react';
import foodJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";

function FoodList() {
    const [foods, setFoods] = useState(foodJson);


    const handleAddFood = (newFood) => {
        setFoods([...foods, newFood]);
    }

  return (
    <div>
        
        <AddFoodForm onAddFood={handleAddFood} />
    </div>
  )
}

export default FoodList
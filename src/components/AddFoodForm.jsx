import React, { useState } from 'react'

function AddFoodForm() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();

  return (
    <form>
        <fieldset>
            <label htmlFor="name">Name: </label>
            <input type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} />            
        </fieldset>
        <fieldset>
            <label htmlFor="image">Picture: </label>
            <input type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)} />            
        </fieldset>
        <fieldset>
            <label htmlFor="calories">Calories: </label>
            <input type="number"
            id="calories"
            name="calories"
            placeholder='0'
            value={calories}
            onChange={(e) => setCalories(e.target.value)} />            
        </fieldset>
        <fieldset>
            <label htmlFor="servings">Calories: </label>
            <input type="number"
            id="servings"
            name="servings"
            placeholder='0'
            value={servings}
            onChange={(e) => setServings(e.target.value)} />            
        </fieldset>

        <button>Submit</button>
    </form>
  )
}

export default AddFoodForm
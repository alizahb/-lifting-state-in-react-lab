import {availableIngredients} from '../App'; 


IngredientList = ({ addIngredient }) => {
    return (
        <div className= "ingredient-list">
            <h2>Available Ingredients</h2>
            <ul>
                {availableIngredients.map((ingredient, index) => (
                    <li key= {index}>
                        {ingredient.name}
                        <button onClick={() => addIngredient(ingredient)}> + </button>
                    </li>
                ))}
            </ul>
        </div>
    );  
  };
  
  export default IngredientList;
  
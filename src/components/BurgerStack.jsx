//import '../App.css';

const BurgerStack = ({ stack, removeIngredient}) => {
    return (
    <div className= "burger-stack">
        <h2> Your Burger </h2>
        <ul>
            {stack.map((ingredient, index) => (
                <li key= {index}>
                {ingredient.name}
                <button onClick= {() => removeIngredient(index)}> x </button>
            </li>
            ))}
        </ul>
        </div>
    ); 
  };

  export default BurgerStack;
  
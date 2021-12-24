import Axios from "axios";
import { Fragment, useState } from "react";
import RecipeTile from "./recipe_tile/RecipeTile";
import CookingWoman from "./assets/woman-cook_1f469-200d-1f373.png";

function App() {
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("kidney-friendly");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Recipe Hub</u>
        <img src={CookingWoman} alt="cooking woman" />
      </h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="search__form">
          <input
            type="text"
            placeholder="Type the Ingredient"
            autoComplete="Off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <select>
            <option
              value="kidney-friendly"
              onClick={() => {
                setHealthLabel("kidney-friendly");
              }}
            >
              kidney-friendly
            </option>
            <option
              value="vegetarian"
              onClick={() => {
                setHealthLabel("Vegetarian");
              }}
            >
              Vegetarian
            </option>
            <option
              value="low-sugar"
              onClick={() => {
                setHealthLabel("low-sugar");
              }}
            >
              low-sugar
            </option>
            <option
              value="egg-free"
              onClick={() => {
                setHealthLabel("egg-free");
              }}
            >
              egg-free
            </option>
            <option
              value="no oil added"
              onClick={() => {
                setHealthLabel("no oil added");
              }}
            >
              no oil added
            </option>
            <option
              value="low potassium"
              onClick={() => {
                setHealthLabel("low potassium");
              }}
            >
              low potassium
            </option>
          </select>
          <input
            type="submit"
            value="Get Recipe"
            className="search__form__submit"
          />
        </div>
      </form>
      <div className="recipes">
        {recipes.map((recipe, i) => {
          return (
            <Fragment key={i}>
              <RecipeTile recipe={recipe} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;

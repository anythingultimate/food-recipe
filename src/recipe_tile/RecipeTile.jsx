function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className="recipe" onClick={() => window.open(recipe["recipe"]["url"])}>
              <img
                className="recipe__image"
                src={recipe["recipe"]["image"]}
                alt="recipe"
              />
              <p className="recipe__name">{recipe["recipe"]["label"]}</p>
            </div>
          )
    )
}

export default RecipeTile

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.render_spinner();
    // Loading the recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    recipeView.render(recipe);
    // Rendering the recipeContainer
  } catch (err) {
    recipeView.render_error(err);
  }
};
const controlSeaResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadRecipeData(query);
    console.log(model.state.search.results);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  recipeView.add_Handler_Render(controlRecipe);
  searchView.add_searchHandler(controlSeaResults);
};
init();

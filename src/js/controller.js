import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model';
import recipeView from './views/recipeView';

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
const init = function () {
  recipeView.add_Handler_Render(controlRecipe);
};
init();

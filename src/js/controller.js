import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model';
import recipeView from './views/recipeView';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////
const throwError = (response, data) => {
  throw new Error(`${data.message} (${response.status})`);
};

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.render_spinner();
    // Loading the recipe
    await model.loadRecipe(id, throwError);
    const { recipe } = model.state;

    recipeView.render(recipe);
    // Rendering the recipeContainer
  } catch (err) {
    alert(err);
  }
};
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipe)
);

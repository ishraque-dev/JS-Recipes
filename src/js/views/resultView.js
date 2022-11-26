import View from './View';
import icons from 'url:../../img/icons.svg';
class ResultView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkUp() {
    console.log(this._data);
    return this._data
      .map(results => {
        return this._generatePreview(results);
      })
      .join('');
  }
  _generatePreview(result) {
    console.log(result);
    return `
      <li class="preview">
            <a class="preview__link" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}...</h4>
                <p class="preview__publisher">${result.publisher}</p>
              
              </div>
            </a>
          </li>
        `;
  }
}
export default new ResultView();

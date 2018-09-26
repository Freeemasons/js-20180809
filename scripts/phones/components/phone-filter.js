import Component from "../../common/component.js";

export default class PhoneFilter extends Component {
  constructor({ element }) {
    super({ element });
    this._element = element;
    console.log(element);
    console.log(this);

    this._render();
    this.filterSelectHandler();

    this.on("click", "phoneFilter-alphabetical", event => {
      console.log("------------------------------------");
      console.log(event);
      console.log("------------------------------------");
      //   let phoneElement = event.delegateTarget.closest('[data-element="phone"]');

      //   this._trigger("addToShoppingCart", phoneElement.dataset.phoneId);
    });
  }

  filterSelectHandler() {
    let select = document.getElementById("phoneFilter-alphabetical");
    console.log(select);
    let newFilterState = select.value;
    console.log(newFilterState);
    return newFilterState;
  }

  _onFilterChange(optionValue) {
    const items = this._items;
    let sortedArray = [];
    if (optionValue === "alphabetical") {
      soretdArray = items.sort((a, b) => {
        return a.name > b.name;
      });
    }
    return soretdArray;
  }

  //остается передать в каталог
  //отработала по аналогии this.catalog.onchange, то коллбек от нее отрисовал новый вариант и передать массив
  //sortedArray

  _render() {
    this._element.innerHTML = `
<p>
    Search:
    <input>
</p>

<p>
    Sort by:
    <select id='phoneFilter-alphabetical' onchange='this.sortPhones()'>
        <option data-element="phoneFilter-alphabetical" value="name">Alphabetical</option>
        <option value="age">Newest</option>
    </select> 
</p>
    `;
  }
}
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['input', 'itemsList']

  connect() {
    console.log('Estoy aqui');
  }

  addItem(event) {
    event.preventDefault();
    console.log('Form funciona');
    let item = this.inputTarget.value;
    this.itemsListTarget.insertAdjacentHTML('beforeend', `
      <li class="list-group-item d-flex justify-content-between align-items-center"
          data-controller="list-items">
        <div data-list-items-target="inputForm">${item}</div>
        <input type="text"
               class="form-control d-none"
               data-list-items-target="editInput">
        <button type="button"
                class="btn btn-sm btn-primary d-none"
                data-list-items-target="saveInput"
                data-action="click->list-items#saveItem">Save</button>

        <div data-list-items-target="controls">
          <button type="button"
                  class="btn btn-sm btn-light"
                  data-action="click->list-items#editItem">Edit</button>
          <button type="button"
                  class="btn btn-sm btn-danger"
                  data-action="click->list-items#removeItem">
            Remove
          </button>
        </div>
      </li>
      `)
    this.inputTarget.value = '';
  }
}

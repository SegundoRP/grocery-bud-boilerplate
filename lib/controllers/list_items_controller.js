import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['inputForm', 'controls', 'editInput', 'saveInput']

  connect() {
    console.log('Estoy aqui de nuevo');
  }

  removeItem() {
    this.element.remove();
  }

  editItem() {
    this.controlsTarget.classList.add('d-none');
    this.inputFormTarget.classList.add('d-none');
    this.editInputTarget.classList.remove('d-none');
    this.saveInputTarget.classList.remove('d-none');
  }

  saveItem() {
    this.inputFormTarget.innerText = this.editInputTarget.value;
    this.controlsTarget.classList.remove('d-none');
    this.inputFormTarget.classList.remove('d-none');
    this.editInputTarget.classList.add('d-none');
    this.saveInputTarget.classList.add('d-none');
  }
}

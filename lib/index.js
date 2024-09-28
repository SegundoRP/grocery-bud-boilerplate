import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import ListController from './controllers/list_controller.js';
Stimulus.register('list', ListController);

import ListItemsController from './controllers/list_items_controller.js';
Stimulus.register('list-items', ListItemsController);

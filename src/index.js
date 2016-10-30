import React from 'react';
import ReactDOM from 'react-dom';
import { loadItems, saveItems } from './utils/localStorage'
/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';

console.log(loadItems())
const store = configureStore(loadItems());

store.subscribe(() => {
  saveItems(store.getState())
})

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

import { ADD_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';

export function addItem() {
  return {
    type: ADD_ITEM
  };
}

export function removeItem() {
  return {
    type: REMOVE_ITEM
  };
}

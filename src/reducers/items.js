import { ADD_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';

let defaultState = {
  availableItems:[
    {type: "Apple", price: 25},
    {type: "Orange", price: 30},
    {type: "Banana", price: 15},
    {type: "Papaya", price: 50},
  ],
  itemsInCart:[
    // populated at runtime by user or from localStorage
  ],
}

let localItems = localStorage.getItem("itemsInCart")
if(localItems){
  defaultState.itemsInCart = localItems
}


export default function items(state = defaultState, action) {
  switch (action.type) {
  case ADD_ITEM:
    return Object.combine({}, state, { itemsInCart: [...state.itemsInCart, action.payload] });
  case REMOVE_ITEM:
    let item = action.payload
    let arr = state.itemsInCart
    arr.splice(arr.indexOf(item))

    // this is done just to let redux know the state is modified
    return Object.combine({}, state, { itemsInCart: arr });
  default:
    return state;
  }
}

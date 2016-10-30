import { ADD_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';

let defaultState = {
  availableItems:[
    {type: "Apple", price: 25},
    {type: "Orange", price: 30},
    {type: "Banana", price: 15},
    {type: "Papaya", price: 50},
  ],
  itemsInCart:[
    {type: "Apple", price: 25},
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
    return Object.assign({}, state, { itemsInCart: [...state.itemsInCart, action.payload] });
  case REMOVE_ITEM:
    let item = action.payload
    let arr = state.itemsInCart
    arr.splice(arr.indexOf(arr.find((i) => i.type===item.type)),1)

    // this is done just to let redux know the state is modified
    return Object.assign({}, state, { itemsInCart: [...arr] });
  default:
    return state;
  }
}

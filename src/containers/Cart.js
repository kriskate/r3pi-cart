import React, { Component } from 'react';
import ItemRemovable from '../components/ItemRemovable'

export default class Cart extends Component {
  render() {
    const { items, actions } = this.props

    let cartItems = []
    let total = 0
    items.map((item) => {
      total += item.price

      let cItem = cartItems.find((i) => i.type == item.type)
      cItem ? cItem.count++ : cartItems.push(Object.assign({}, item, {count:1}))
    })

    return (
      <div>
        <div>Here are the items you added</div>
          {cartItems.map((item, idx) => (
            <ItemRemovable key={idx} removeItem={actions.removeItem} value={item}/>
          ))}
        <div><i>Total:</i> {total} <b>ct</b></div>
      </div>
    );
  }
}

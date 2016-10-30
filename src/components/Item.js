import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { value, addItem } = this.props
    return (
      <div>
        <span>{value.type} - </span>
        <span>price: {value.price} <b>ct</b></span>
        <button onClick={() => addItem(value)}>add to cart</button>
      </div>
    );
  }
}

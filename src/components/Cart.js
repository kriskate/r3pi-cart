import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { items } = this.props

    return (
      <div>
        <div>Here are the items you added</div>
        <div>Total price:</div>
      </div>
    );
  }
}

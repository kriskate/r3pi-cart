import React, { Component } from 'react';

const styles = {
  rmBtn: {
    color: "red",
  }
}
export default class Item extends Component {
  render() {
    const { value, removeItem } = this.props

    return (
      <div>
        <span>{value.type} - </span>
        <span>quantity: {value.count}</span>
        <button style={styles.rmBtn} onClick={() => removeItem(value)}>remove</button>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import Item from '../components/Item'

export default class AvailableItems extends Component {

  render() {
    const { actions, items } = this.props

    return (
      <div className="counter-container">
        {items.map((item, idx) => (
          <Item key={idx} addItem={actions.addItem} value={item}/>
        ))}
      </div>
    );
  }
}

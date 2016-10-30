import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import AvailableItems from '../containers/AvailableItems';
import Cart from './Cart';

class App extends Component {
  render() {
    const { availableItems, itemsInCart, actions } = this.props;

    return (
      <div className="main-app-container">
        <div>Add items to your shopping cart</div>
        <br/>
        <AvailableItems items={availableItems} actions={actions} />
        <br/>
        <Cart items={itemsInCart} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    availableItems: state.items.availableItems,
    itemsInCart: state.items.itemsInCart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

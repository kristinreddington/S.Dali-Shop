import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartCard from '../components/CartCard';
import { removeFromCart, getCartItems } from '../actions/cartActions'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getCartItems();
  }

  componentDidUpdate() {
    this.props.getCartItems();
  }

  render(){
    return(
      <div>
        <h3 className='text-center'>Welcome!</h3>

        <h4 className='m-2 text-dim-gray'>Shopping Cart</h4><hr />
        <div className="Cart-card">
        {this.props.cart.map( line_item => <CartCard handleCounter={this.handleCounter} key={line_item.id} getCartItems={this.props.getCartItems} removeFromCart={this.props.removeFromCart} line_item={line_item} />
         )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    products: state.products,
    cart: state.cart,
    email: state.email
  })
}

export default connect (mapStateToProps, { removeFromCart, getCartItems })(Dashboard);

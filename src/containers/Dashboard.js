import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../helpers/Auth'
import './Dash.css'
import CartCard from '../components/CartCard';
import { removeFromCart, getCartItems } from '../actions/cartActions'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getCartItems()
  }

  componentDidUpdate() {
    this.props.getCartItems()
  }

  render(){
    return(
      <div>
        <h3>Welcome!</h3>

        <h4>Shopping Cart</h4><hr />
        <div className="Cart-card">
        {this.props.cart.map( line_item => <CartCard key={line_item.id} getCartItems={this.props.getCartItems} removeFromCart={this.props.removeFromCart} line_item={line_item} />)}
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

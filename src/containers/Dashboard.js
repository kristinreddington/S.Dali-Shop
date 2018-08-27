import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../helpers/Auth'
import './Dash.css'
import CartCard from '../components/CartCard';
import { removeFromCart, getCartItems } from '../actions/cartActions'

class Dashboard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: null,
  //     cart: [],
  //   }
  // }

  componentDidMount() {
    this.props.getCartItems()
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/profile', {
  //     method: 'GET',
  //     headers: {
  //       token: Auth.getToken(),
  //       Authorization: `Token ${Auth.getToken()}`
  //     }
  //   }).then(res =>  res.json())
  //     .then(res => {
  //       this.setState({
  //         email: res.user.email,
  //         cart: res.user.cart
  //       })
  //     }).catch(error => console.log(error))
  // }

  render(){
    return(
      <div>
        <h3>Welcome!</h3>

        <h4>Shopping Cart</h4><hr />
        <div className="Cart-card">
        {this.props.cart.map( line_item => <CartCard key={line_item.id} removeFromCart={this.props.removeFromCart} line_item={line_item} />)}
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

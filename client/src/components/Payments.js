import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as action from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily" // the pop-in header title
        description="$5 for 5 email credits" // the pop-in header subtitle
        amount={500} //default dollars, 500 cents
        token={(token) => this.props.handleToken(token)} //expecting to received callback func, token from stripe
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, action)(Payments);

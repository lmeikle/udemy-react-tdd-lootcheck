import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitCoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitCoin();
  }

  computeBitcoin() {
    const {bitcoin} = this.props;
    if (Object.keys(bitcoin).length === 0) return "";

    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchBitCoin })(Loot);

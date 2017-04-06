import React, { Component } from 'react';

class CalculationRow extends Component {
  render() {
    return (
      <tr className="CalculationRow">
        <td>{this.props.text}</td>
        <td>{this.props.calories}</td>
      </tr>
    );
  }
}

export default CalculationRow;

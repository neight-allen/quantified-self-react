import React, { Component } from 'react';
import CalculationRow from './CalculationRow.jsx'

class MealFoot extends Component {
  render() {
    return (
      <tfoot className="MealFoot">
        <CalculationRow text="Total Calories" calories={this.props.total} />
        <CalculationRow text="Remaining Calories" calories={this.props.remaining} />
      </tfoot>
    );
  }
}

export default MealFoot;

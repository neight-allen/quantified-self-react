import React, { Component } from 'react';
import MealFoodRow from './MealFoodRow.jsx'

class MealBody extends Component {
  render() {
    const foodRows = this.props.foods.map((food, index) => {
      return (
        <MealFoodRow
          key={food.join_id}
          joinId={food.join_id}
          name={food.name}
          calories={food.calories}
          removeFood={this.props.removeFood} />)
    })

    return (
      <tbody className="MealBody">
        {foodRows}
      </tbody>
    );
  }
}

export default MealBody;

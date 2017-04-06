import React, { Component } from 'react';

class MealFoodRow extends Component {
  logRemoveFood(){
    console.log(this.props.removeFood)
    this.props.removeFood(this.props.joinId)
  }

  render() {
    return (
      <tr className="MealFoodRow">
        <td className="foodName">{this.props.name}</td>
        <td className="foodCalories">{this.props.calories}</td>
        <td className="deleteFood"><button onClick={() => this.logRemoveFood()}>X</button></td>
      </tr>
    );
  }
}

export default MealFoodRow;

import React, { Component } from 'react';
import MealHead from './MealHead.jsx'
import MealBody from './MealBody.jsx'
import MealFoot from './MealFoot.jsx'

class MealTable extends Component {

  calculateTotal(){
    return this.props.foods.reduce((total, food) => {
      return total + food.calories
    }, 0)
  }

  calculateRemaining(){
    return this.props.goal - this.calculateTotal()
  }

  render() {
    return (
      <div className="MealTable">
        <h3>{this.props.mealTitle}</h3>
        <table>
          <MealHead />
          <MealBody foods={this.props.foods} removeFood={this.props.removeFood}/>
          <MealFoot total={this.calculateTotal()} remaining={this.calculateRemaining()} />
        </table>
      </div>
    );
  }
}

export default MealTable;

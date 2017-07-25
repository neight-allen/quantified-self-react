import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MealFoodRow from './MealFoodRow'
import MealFooterRow from './MealFooterRow'
import axios from 'axios'

class MealTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: [] 
    }
    axios.get(`http://quantified-api.herokuapp.com/v1/meals/${this.props.mealId}`)
      .then(response => {
        this.setState({foods: response.data})
      })
  }

  removeFood(id) {
    let joinId
    let newFoods = this.state.foods.filter( food => {
      if(food.id == id) joinId = food.join_id

      return food.id != id
    })
    this.setState({foods: newFoods})
    axios.delete(`http://quantified-api.herokuapp.com/v1/meal_foods/${joinId}`)
  }

  calculateTotalCalories() {
    return this.state.foods.reduce((total, food) => {
      return total + food.calories
    }, 0)
  }

  calculateRemainingCalories(){
    return this.props.goalCalories - this.calculateTotalCalories()
  }

  mealFoodRows() {
    return this.state.foods.map(food => {
      return (<MealFoodRow 
        key={food.id} 
        name={food.name} 
        calories={food.calories} 
        handleRemove={this.removeFood.bind(this)} 
        id={food.id} />)
    })
  }

  render() {

    return (
      <div className={"meal-table"}>
        <h1>{this.props.mealName}</h1>
        <table>
          <thead>
            <tr><th>Name</th><th>Calories</th></tr>
          </thead>
          <tbody>
            {this.mealFoodRows()}
          </tbody>
          <tfoot>
            <MealFooterRow title={"Total Calories"} calories={this.calculateTotalCalories()} />
            <MealFooterRow title={"Remaining Calories"} calories={this.calculateRemainingCalories()} />
          </tfoot>
        </table>
      </div>
     ) 
  }
}

export default MealTable
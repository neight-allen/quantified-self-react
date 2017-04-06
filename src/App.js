import React, { Component } from 'react';
import MealTable from './MealTable/MealTable.jsx'
import Axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {meals: {
      breakfast:[],
      lunch:[],
      dinner:[],
      snacks:[]
    }}
    Axios.get('https://quantified-api.herokuapp.com/v1/days/04/05/2017')
      .then(response => {
        this.setState({meals: response.data})
      })
      .catch(error => console.log(error))
  }

  removeFood(join_id) {
    Axios.delete(`https://quantified-api.herokuapp.com/v1/meal_foods/${join_id}`)
    .then(() => {
      let mealNames = ["breakfast", "lunch", "dinner", "snacks"]
      let newMeals = mealNames.reduce((mealsAcc, mealName) => {
        mealsAcc[mealName] = this.state.meals[mealName].filter(food => {
          return food.join_id !== join_id
        })
        return mealsAcc
      }, {})
      this.setState({meals: newMeals})
    })
  }

  render() {
    return (
      <div className="App">
        <MealTable mealTitle="Breakfast" goal={400} foods={this.state.meals.breakfast} removeFood={this.removeFood.bind(this)} />
        <MealTable mealTitle="Lunch" goal={600} foods={this.state.meals.lunch} removeFood={this.removeFood.bind(this)} />
        <MealTable mealTitle="Dinner" goal={800} foods={this.state.meals.dinner} removeFood={this.removeFood.bind(this)} />
        <MealTable mealTitle="Snacks" goal={200} foods={this.state.meals.snacks} removeFood={this.removeFood.bind(this)} />
      </div>
    );
  }
}

export default App;

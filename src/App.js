import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MealTable from './MealTable/MealTable'

class App extends Component {
  render() {
    return (
      <div id="app">
        <MealTable mealName={`Breakfast`} goalCalories={400} mealId={1} />
        <MealTable mealName={`Lunch`} goalCalories={400} mealId={2} />
        <MealTable mealName={`Dinner`} goalCalories={400} mealId={3} />
        <MealTable mealName={`Snacks`} goalCalories={400} mealId={4} />
      </div>  
    );
  }
}

export default App;

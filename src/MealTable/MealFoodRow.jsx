import React, { Component } from 'react'

class MealFoodRow extends Component {

  handleRemoveClick() {
    this.props.handleRemove(this.props.id)
  }

	render(){
    return (
      <tr className={"meal-food-row"} >
        <td className={"meal-food-name"}>{this.props.name}</td>
        <td className={"meal-food-calories"}>{this.props.calories}</td>
        <td className={"meal-food-remove"}>
          <button onClick={this.handleRemoveClick.bind(this)}>X</button>
        </td>
      </tr>
    )
  }
}

export default MealFoodRow
import React, { Component } from 'react'

class MealFooterRow extends Component {
  render() {
    return (
      <tr className="meal-footer-row">
        <td className="meal-footer-title">{this.props.title}</td>
        <td className="meal-footer-calories">{this.props.calories}</td>
      </tr>
    )
  }
}

export default MealFooterRow
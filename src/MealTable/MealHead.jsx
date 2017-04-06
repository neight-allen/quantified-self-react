import React, { Component } from 'react';

class MealHead extends Component {
  render() {
    return (
      <thead className="MealHead">
        <tr>
          <th>Name</th>
          <th>Calories</th>
        </tr>
      </thead>
    );
  }
}

export default MealHead;

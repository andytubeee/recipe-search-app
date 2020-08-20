import React, { Component } from 'react';
import style from './recipe.module.css';

class Recipe extends React.Component {
  render() {
    var time = this.props.time;
    var minuteorminutes;
    if (time <= 1) {
      minuteorminutes = 'minute';
    } else {
      minuteorminutes = 'minutes';
    }
    return (
      <div className={style.recipes}>
        <h1 className={style.title}>{this.props.title}</h1>
        <p>Calories: {this.props.calories}</p>
        <img src={this.props.foodimg} alt='' />
        <br />
        <h3>Ingredients</h3>
        <ul>
          {this.props.ingr.map((i) => (
            <li key={i}>{i.text}</li>
          ))}
        </ul>
        <h3>Time: {time + ' ' + minuteorminutes}</h3>
      </div>
    );
  }
}

export default Recipe;

import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox  from './components/FoodBox';
import { AddFood } from './components/AddFood';
import 'bulma/css/bulma.css';
import { TodaysFoods } from './components/TodaysFoods';
import SearchForm from './components/SearchForm';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      foodArr: foods,
      filteredFoodArr: foods,
      saveFood: []
      
    };
  }

  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foodArr];
    foodsCopy.push(food);
    this.setState({
      foodArr: foodsCopy,
    });
  };

  handleSearch = (searchString) => {
    //console.log('Funciona mierda', event.target.value)
    
    const filteredFoodCopy = [...this.state.foodArr]
    let filteredFood = filteredFoodCopy.filter(food => {
      return food.name.toLowerCase().includes(searchString.toLowerCase())
    })
    
    this.setState({
      filteredFoodArr: filteredFood,
  
    })
  };

  render() {

    
    return (
      <div>
        <AddFood addFood={this.addFoodHandler} />

        <SearchForm handleSearch={this.handleSearch}/>

        {this.state.filteredFoodArr.map((elem, i) => {
          return (
            <div>
              <FoodBox
                key={[i]}
                image={elem.image}
                name={elem.name}
                calories={elem.calories}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

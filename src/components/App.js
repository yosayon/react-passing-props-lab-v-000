import React, {component} from 'react';
import FruitBasket from './FruitBasket';

export default class App extends React.Component{
  state = {
    fruit: [],
    filters: [],
    currentFilter: null,
  }

 componentDidMount() {
  this.fetchFilters();
  this.fetchFruit();
 }

  fetchFruit = () => {
   fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
   fetch('/api/fruit_types')
     .then(response => response.json())
     .then(filters => this.setState({ filters }));
 }

  handleFilterChange = event => {
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
        <FruitBasket
          handleChange={this.handleFilterChange}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          fruit={this.state.fruit}
        />
    )
  }
}

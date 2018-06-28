import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({handleFilterChange, filters, fruit, currentFilter}) =>
  <div className="fruit-basket">

    <Filter
      handleChange={handleFilterChange}
      filters={filters}
    />

     <FilteredFruitList
       fruit={fruit}
       filter={currentFilter}
     />

 </div>


FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function(){}
}


export default FruitBasket;

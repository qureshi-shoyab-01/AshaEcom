import React, { useState } from 'react';
import './FilterComponent.css';
import Card from '../Card/Card';

const FilterComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterSelection = (filter) => {
    setActiveFilter(filter);
  };

  // const items = [
  //   { name: 'BMW', categories: ['cars'] },
  //   { name: 'Orange', categories: ['colors', 'fruits'] },
  //   { name: 'Volvo', categories: ['cars'] },
  //   { name: 'Red', categories: ['colors'] },
  //   { name: 'Ford', categories: ['cars'] },
  //   { name: 'Blue', categories: ['colors'] },
  //   { name: 'Cat', categories: ['animals'] },
  //   { name: 'Dog', categories: ['animals'] },
  //   { name: 'Melon', categories: ['fruits'] },
  //   { name: 'Kiwi', categories: ['fruits', 'animals'] },
  //   { name: 'Banana', categories: ['fruits'] },
  //   { name: 'Lemon', categories: ['fruits'] },
  //   { name: 'Cow', categories: ['animals'] },
  // ];

  return (
    <>
    <div className='FilterComponent-main'>
        <div className="filter-text-content">
          <h2>Our Top Collection</h2>
          <p>Browse The Collection of Top Products</p>
        </div>
      <div id="myBtnContainer">
        <button className={`btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterSelection('all')}> Show all</button>
        <button className={`btn ${activeFilter === 'cars' ? 'active' : ''}`} onClick={() => filterSelection('cars')}>COOKIN</button>
        <button className={`btn ${activeFilter === 'animals' ? 'active' : ''}`} onClick={() => filterSelection('animals')}> DINING</button>
        <button className={`btn ${activeFilter === 'fruits' ? 'active' : ''}`} onClick={() => filterSelection('fruits')}> KITCHEN</button>
        <button className={`btn ${activeFilter === 'colors' ? 'active' : ''}`} onClick={() => filterSelection('colors')}> POOJA GIFTING</button>
      </div>

      {/* <div className="container">
        {items.map(item => (
          <div
            key={item.name}
            className={`filterDiv ${item.categories.join(' ')} ${activeFilter === 'all' || item.categories.includes(activeFilter) ? 'show' : ''}`}
          >
            {item.name}
          </div>
        ))}
      </div> */}
      <div className="container">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
    </>
  );
};

export default FilterComponent;

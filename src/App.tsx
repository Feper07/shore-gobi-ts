
    import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    import './App.css';
    import ColorClothes from './components/ColorClothes';
    import Size from './components/Size';
    import Color from './components/Color';
    import Gender from './components/Gender';
    import Collection from './components/Collection';
    import Header from './components/Header';
    import Description from "./components/Description";
    import PageRouterClothes from "./components/PageRouterClothes";
    import { products } from './products';

    function App() {
    
    /* I need these consts if I want to creat the filters */
    
    const [currentGender, setCurrentGender] = useState('');
    const [currentCollection, setCurrentCollection] = useState('');
    
    
      const filteredProducts = currentGender
      ? products.filter((item) => item.gender === currentGender)
      : products;

      const filteredCollection = currentCollection
      ? products.filter((item) => item.collectionShore === currentCollection)
      : products;

      /* This const is necessary if I want to mix the filters inside gander and collection. (use includes) */
      
      const filteredItems = filteredProducts.filter(item => filteredCollection.includes(item));
      
    return (
      <div className="App"> 
        <div className="main-container"> 
          <div className='first-container'> 
            <Header/> 
          </div> 
          <div className='second-container'> 
            <Description/> 
            </div>    
          <div className="third-container"> 
            <div className="filters"> 
              <div className='collection'> 
                <Collection setCurrentCollection={setCurrentCollection} /> 
              </div>
              <div className="gender">
                  <Gender setCurrentGender={setCurrentGender} />
              </div>
              <div className='size'>
                  <Size/> 
              </div> 
              <div className='color-select-option'> 
                  <Color/> 
              </div> 
            </div>
            <div className="option-color-images"> 
                  {filteredItems.map((item) => (
                      <ColorClothes {...item} key={item.description} /> 
                    ))
                  }
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default App;

/*
Before of mix filters gender and collection:

{filteredProducts.map((item) => (
  <ColorClothes {...item} key={item.description} /> 
  ))}
            
  {filteredCollection.map((item) => (
  <ColorClothes {...item} key={item.description} /> 
  ))}
            
*/
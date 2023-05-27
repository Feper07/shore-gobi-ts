  
  import React, { useState } from 'react';
  import "../style-sheets/Color.css";
  import { BsChevronDown } from "react-icons/bs";
  import { BsCheckLg } from "react-icons/bs";

  function Color() {
    const [selectedColor, setSelectedColor] = useState('XS');

    function handleColorSelect(color:string) {
      if (selectedColor === color) {
        setSelectedColor('');
      } else {
        setSelectedColor(color);
      }
    }
      return (
        <div className='main-color'> 
          <div className='title-color'>  
              <p> Color</p>  
              <BsChevronDown/>   
          </div>
          <div className='options-color2'> 
          <div className={`letter-colora ${selectedColor === 'a' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('a')}><BsCheckLg/></div>
          <div className={`letter-colorb ${selectedColor === 'b' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('b')}><BsCheckLg/></div>
          <div className={`letter-colorc ${selectedColor === 'c' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('c')}><BsCheckLg/></div>
          <div className={`letter-colord ${selectedColor === 'd' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('d')}><BsCheckLg/></div>
          <div className={`letter-colore ${selectedColor === 'e' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('e')}><BsCheckLg/></div>
          <div className={`letter-colorf ${selectedColor === 'f' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('f')}><BsCheckLg/></div>
          <div className={`letter-colorg ${selectedColor === 'g' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('g')}><BsCheckLg/></div>
          <div className={`letter-colorh ${selectedColor === 'h' ? 'selected-color-style' : ''}`} onClick={() => handleColorSelect('h')}><BsCheckLg/></div>
          </div>
        </div>
      );
    }
  
    export default Color;
    
  
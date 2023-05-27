  
  import React, { useState } from 'react'; 
  import "../style-sheets/Size.css"; 
  import { BsChevronDown } from "react-icons/bs"; 

  function Size() { 
    const [selectedSize, setSelectedSize] = useState('XS'); 
 
    function handleSizeSelect(size:string) { 
      if (selectedSize === size) { 
        setSelectedSize(''); 
      } else { 
        setSelectedSize(size); 
      } 
    } 

    return ( 
      <div className='main-size'> 
        <div className='title-size'> 
          <p> Size</p> 
          <BsChevronDown/> 
        </div> 
        <div className='options-size'> 
          <div className={`letter ${selectedSize === 'XS' ? 'selected' : ''}`} onClick={() => handleSizeSelect('XS')}>XS</div>
          <div className={`letter ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeSelect('S')}>S</div>
          <div className={`letter ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeSelect('M')}>M</div>
          <div className={`letter ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeSelect('L')}>L</div>
          <div className={`letter ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('XL')}>XL</div>
          <div className={`letter ${selectedSize === '2XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('2XL')}>2XL</div>
        </div> 
      </div> 
    );
  }

  export default Size;


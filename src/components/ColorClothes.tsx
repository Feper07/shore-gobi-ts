import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style-sheets/ColorClothes.css"

  interface ColorClothesProps { 
  a: string; 
  b: string; 
  c: string; 
  d: string; 
  description: string; 
  colorTile: string[]; 
  worth: string; 
   id: string;
  } 

  function ColorClothes(props: ColorClothesProps) {
    const [colorClothes, setColorClothes] = useState(props.a);

    function handleColorHover(color: string) {
      switch (color) {
        case 'a':
          setColorClothes(props.a);
          break;
        case 'b':
          setColorClothes(props.b);
          break;
        case 'c':
          setColorClothes(props.c); 
          break;
        case 'd':
          setColorClothes(props.d);
          break;
        default:
          setColorClothes(props.a);
          break;
      }
    }

    function handleColorClick(color: string) {
      switch (color) { 
        case 'a':  
          setColorClothes(props.a); 
          break; 
        case 'b':  
          setColorClothes(props.b);
          break; 
        case 'c': 
          setColorClothes(props.c); 
          break; 
        case 'd': 
          setColorClothes(props.d); 
          break; 
        default: 
          setColorClothes(props.a); 
          break; 
      } 
    }  

    return ( 
      <div className='container-main-image'>

        {colorClothes && ( 
          <div className="selected-image"> 
            <Link to={"/items/" + props.id }>
              <img className='img_select' src={colorClothes} alt="selectedImage" />
            </Link>
            
          </div> 
        )} 
        <div className='description'>{props.description}</div> 
        <div className="image-container"> 
           {props.colorTile.map((color, index) => (
            <div
              className='color-tile'
              style={{ backgroundColor: color }} 
              onMouseEnter={() => handleColorHover(String.fromCharCode(97 + index))}
              onClick={() => handleColorClick(String.fromCharCode(97 + index))}
            >
              {String.fromCharCode(65 + index)}
            </div>
          ))}
        </div>
        <div className='worth'>{props.worth}</div>
      </div>
    );
  }

export default ColorClothes;
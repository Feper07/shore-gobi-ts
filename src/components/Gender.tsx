
import React, { useState } from 'react'; 
import "../style-sheets/Gender.css"; 
import { BsChevronDown, BsCheckLg } from "react-icons/bs"; 
import Listgender from "../components/Listgender"; 

interface IGenderProps{ 
  setCurrentGender: (gender: string )=>void; 
} 

function Gender(props:IGenderProps) { 
  const [selectedGender, setSelectedGender] = useState(''); 

  function handleGenderSelect(gender:string) {  
    let nextGender = gender === selectedGender ? '' : gender; 
    setSelectedGender(nextGender); 
    props.setCurrentGender(nextGender as string); 
  } 

  return ( 
    <div className="main-gender"> 
      <div className="title-gender">  
        <p>Gender</p> 
        <BsChevronDown/> 
      </div> 
      <div className="options-gender"> 
        <div className="text-select-gender"> 
          <div 
            className={`letter-gender ${selectedGender === 'women' && 'selected-gender'}`} 
            onClick={() => handleGenderSelect('women')} 
          > 
            <BsCheckLg/> 
          </div> 
          <div  
            className={`letter-gender ${selectedGender === 'men' && 'selected-gender'}`}
            onClick={() => handleGenderSelect('men')} 
          > 
            <BsCheckLg/> 
          </div> 
        </div> 
        <div className='description-select-gender'> 
          <div>Women</div> 
          <div>Men</div> 
        </div>  
      </div> 
      <div className='list-gender'> 
        <Listgender/> 
      </div> 
    </div> 
  ); 
} 

export default Gender; 


    import React, { useState } from 'react';
    import "../style-sheets/Listgender.css";

    function Listgender() { 

      const [selectedListgender, setSelectedListgender] = useState('Basic'); 

            function handleListgenderSelect(Listgender:string) { 
              if (selectedListgender === Listgender) { 
                setSelectedListgender(''); 
              } else { 
                setSelectedListgender(Listgender); 
              }
            }

          return (
            <div className='option-listgender'> 
              <div className={`letterListgender ${selectedListgender === 'Basic' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('Basic')}>Basic</div>
              <div className={`letterListgender ${selectedListgender === 'Cardigans' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('Cardigans')}>Cardigans</div>
              <div className={`letterListgender ${selectedListgender === 'Hoodies' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('Hoodies')}>Hoodies</div>
              <div className={`letterListgender ${selectedListgender === 'R Necks' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('R Necks')}>R Necks</div>
              <div className={`letterListgender ${selectedListgender === 'Turtle Necks' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('Turtle Necks')}>Turtle Necks</div>
              <div className={`letterListgender ${selectedListgender === 'V Necks' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('V Necks')}>V Necks</div>
              <div className={`letterListgender ${selectedListgender === 'Vests & Tops' ? 'selectedListgender' : ''}`} onClick={() => handleListgenderSelect('Vests & Tops')}>Vests & Tops</div>
            </div>
          );
    }
    
    export default Listgender;

    
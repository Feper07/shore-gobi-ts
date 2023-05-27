import React, { useState } from 'react'; 
import "../style-sheets/Collection.css"; 
import { BsChevronDown } from "react-icons/bs"; 
import { BsCheckLg } from "react-icons/bs"; 

interface ICollectionProps{ 
  setCurrentCollection: (collection: string )=>void; 
} 

function Collection(props:ICollectionProps) { 
  const [selectedCollection, setSelectedCollection] = useState(''); 

  function handleCollectionSelect(collection:string) { 
    let nextCollection = collection === selectedCollection ? '' : collection; 
    setSelectedCollection(nextCollection); 
    props.setCurrentCollection(nextCollection as string); 
  } 

  return ( 
    <div className='main-collection'> 
      <div className='title-collection'> 
        <p> Collection</p> 
        <BsChevronDown/> 
      </div> 
      <div className='options-collection'> 
        <div className='text-select'> 
          <div className={`letter-collection ${selectedCollection === 'Paintbox' && 'selected-collection'}`} onClick={() => handleCollectionSelect('Paintbox')}><BsCheckLg/></div>
          <div className={`letter-collection ${selectedCollection === 'Mineral' && 'selected-collection'}`} onClick={() => handleCollectionSelect('Mineral')}><BsCheckLg/></div>
          <div className={`letter-collection ${selectedCollection === 'Winter' && 'selected-collection'}`} onClick={() => handleCollectionSelect('Winter')}><BsCheckLg/></div>
        </div>
        <div className='description-select'> 
          <div>Paintbox</div> 
          <div>Mineral</div> 
          <div>Winter</div> 
        </div>
      </div>
    </div>
  );
}

export default Collection;

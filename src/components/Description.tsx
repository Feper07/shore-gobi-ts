   
    import React from 'react';
    import "../style-sheets/Description.css";
    import { CiSliderHorizontal } from "react-icons/ci";
    import { BsChevronDown } from "react-icons/bs";
    import { FiX } from "react-icons/fi";
    
    function Description() {
      return (
        <div className='main-description'>
            <div className='text-1'>
                <div><strong>Home &nbsp; / &nbsp; Women &nbsp;/ &nbsp;Swaters &nbsp;/ &nbsp; All Swaters</strong>&nbsp;</div>
                <p className='products-total'>  &nbsp;(254 Products)</p>
            </div>
            <div className='text-2'>
                <div><strong>Active filters (24) &nbsp;&nbsp;&nbsp;Clear All</strong>
                </div>
                <div className='text-2-icons'>
                    <div><strong>&nbsp; Hide Filters &nbsp; <CiSliderHorizontal/></strong> </div>
                    <div><strong>&nbsp; Sort By &nbsp;<BsChevronDown/> </strong></div>
                </div>
            </div>
            <div className='text-3'>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Cardigans &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;White &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Black &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>
                <div className='text-3-icons'>&nbsp;<strong><FiX/></strong> &nbsp;Qwertyuopas &nbsp;</div>                
            </div>
        </div>
      );
    }
    export default Description;
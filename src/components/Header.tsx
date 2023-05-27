  
  import React from 'react'; 
  import "../style-sheets/Header.css"; 
  import { HiOutlineLocationMarker, HiOutlineShoppingBag } from "react-icons/hi"; 
  
  function Header() { 
  
      return ( 
        <div className='main-header'> 
            <div className='headerA'> 
              <div> 
                <nav className="navbar bg-body-tertiary navbar-sm"> 
                  <div className="container-fluid-header"> 
                    <form className="d-flex" role="search"> 
                      <input className="form-control form-control-sm me-2" type="search" placeholder="Search here... " aria-label="Search"></input> 
                    </form> 
                  </div> 
                </nav> 
              </div> 
            </div> 
            <div className='headerB'> 
              <div className='title-header'> 
                <p className='header-mayus'><span>GOBI</span></p> 
                <div className='sub-title-header'> 
                  <div><strong>WOMEN</strong></div> 
                  <div><strong>MEN</strong></div> 
                  <div><strong>COLLECTIONS</strong></div> 
                  <div><strong>ACCESORIES</strong></div> 
                  <div><strong>HOME</strong></div> 
                  <div><strong>SALE</strong></div> 
                </div> 
              </div> 
            </div> 
            <div className='headerC'> 
              <div className='sign'>Sign In</div> 
              <div className='icons'><HiOutlineLocationMarker/></div> 
              <div className='icons'><HiOutlineShoppingBag/></div> 
              <div className='united'>United kingdom</div> 
            </div> 
        </div> 
      ); 
    } 

    export default Header;
    















































    
  
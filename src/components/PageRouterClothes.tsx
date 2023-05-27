
  import React from 'react'; 
  import { HiOutlineLocationMarker, HiOutlineShoppingBag } from "react-icons/hi"; 
  import "../style-sheets/PageRouterClothes.css"; 
  import ColorClothes from "../components/ColorClothes"; 
  import { products } from '../products';
  import { useParams } from 'react-router-dom';
  import { BsCartCheck } from "react-icons/bs"; 
  import { RiTShirtLine } from "react-icons/ri";


  function PageRouterClothes() { 
    let { itemId } = useParams(); 
      let item = products.find((x)=>x.id==itemId); 
      console.log(item); 

      return ( 
        <div className='main-routerClothes'>  
            <div className='header-router'> 
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
            <div className='info-router'>
              
                <div className='container-images-router'>
                                  <div className='image-router'>
                          {item && (
                            <>
                              <div className='selected-info'>
                                <img className='img_select' src={item.a} alt='selectedImage' />
                                <img className='img_select' src={item.b} alt='selectedImage' />
                                <img className='img_select' src={item.c} alt='selectedImage' />
                                <img className='img_select' src={item.d} alt='selectedImage' />
                              </div>

                              <div className='description-router'>{item.description}</div>
                                <div className='worth-router'>{item.worth}</div>
                            </>
                          )}
                        </div>
                  <div className='information-router'>
                    <div className='size-router'>
                      <div className='add-car'>
                         <div className='text-car'>
                        <div> Añadir al carrito
                        </div>
                      </div>
                      <div className='car-icon'>
                         <BsCartCheck/>
                      </div>
                    </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
                <div>
                  
                </div>
            </div>
        </div> 
      );
    } 

    export default PageRouterClothes;



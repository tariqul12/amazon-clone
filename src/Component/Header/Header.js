import React from 'react'
import './Header.css';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
  return (
    <div className='header'>
      <img 
            className='header-logo'
            src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png" alt="" />
            <div className="header-search">
                <input 
                    className='header-searchInput'
                    type="text" name="" id="" 
                    />
                    {/* Logo */}
                    <FontAwesomeIcon className='header-search-icon' icon={faSearch}></FontAwesomeIcon>
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">Hello Guest</span>
                    <span className="header-optionLineTwo">Sign In</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">Result</span>
                    <span className="header-optionLineTwo">Order</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>
                <div className="header-shopping-basket-icon">
                      <FontAwesomeIcon className='Shopping-basket-icon' 
                      icon={faShoppingBasket}></FontAwesomeIcon>
                      <span 
                      className='header-optionLineTwo header-basketCount'>0</span>
                      
                </div>
            </div>
            
    </div>
  )
}

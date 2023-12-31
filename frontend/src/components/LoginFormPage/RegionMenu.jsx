import React, { useState, useEffect } from 'react'; 
import "./RegionMenu.css"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import countries from './countries.json'

function RegionMenu(){
    const [isActive, setIsActive] = useState(false);
    // const [selectedRegion, setSelectedRegion] = useState("America/Canada")
    
    const closeMenu = () => {
      setIsActive(false);
    };
    
    useEffect(() => {
      if (!isActive) return;
  
      document.addEventListener('click', closeMenu);
    
      return () => document.removeEventListener("click", closeMenu);
    }, [isActive]);
  
    return (
      <>

      <div className="dropddown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <h3 id='h3-button'>🇺🇸🇨🇦</h3>
          {!isActive ? (
              <BsFillCaretDownFill size={10} color='grey' id='caret'/> 
            ) : (
              <BsFillCaretUpFill size={10} color='grey' id='caret'/> 
            )}

          {/* <FontAwesomeIcon icon={faCarrot} /> */}
        </div>
        <div className="dropdown-container">
          {isActive && (
            <div className="dropdown-content">
              {countries.map((country, i) => (
                <div className="dropdown-item" key={country.country}>
                  <h3 id='item-comp'>{country.flag}{country.country}{country['area-code']}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      </>
    );
  }

  export default RegionMenu;
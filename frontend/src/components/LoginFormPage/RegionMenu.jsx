import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import "./RegionMenu.css"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import countries from './countries.json'

function RegionMenu(){
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    // const [selectedRegion, setSelectedRegion] = useState("America/Canada")
    
    useEffect(() => {
      if (!isActive) return;
  
      const closeMenu = () => {
        setIsActive(false);
      };
  
      document.addEventListener('click', closeMenu);
    
      return () => document.removeEventListener("click", closeMenu);
    }, [isActive]);
  
    return (
      <>

      <div className="dropddown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <h3 id='h3-button'>🇺🇸🇨🇦</h3>
          {!isActive ? (
              <BsFillCaretDownFill size={10} color='grey'/> 
            ) : (
              <BsFillCaretUpFill size={10} color='grey'/> 
            )}

          {/* <FontAwesomeIcon icon={faCarrot} /> */}
        </div>
        <div className="dropdown-container">
          {isActive && (
            <div className="dropdown-content">
              {countries.map((country, i) => (
                <div className="dropdown-item">
                  <h3 id='item-comp'>{country.flag}{country.country}{country['area-code']}</h3>
                  {/* <h3 id='item-comp'>{country.country}</h3>
                  <h3 id='item-comp'>{country['area-code']}</h3> */}
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
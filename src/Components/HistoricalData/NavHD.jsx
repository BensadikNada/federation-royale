import React, { useState } from 'react';
import '../../Styles/NavRT.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import logo from '/logo/logo-equipe.png'

function NavHD() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className='nav-rt'>
        <img src={logo} alt="logo-equipe" />
        <h3>Données Historiques</h3>
        <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to='/real-time'>Suivi en temps réel</Link>
            <Link to='/expert-system'>Système expert intelligent</Link>
            <Link to="/medical-tracking">Suivi médical</Link>
            <Link to="/historical-data" >Données Historiques</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavHD;
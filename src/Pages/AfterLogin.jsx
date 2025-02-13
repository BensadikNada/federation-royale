import React from 'react';
import Header from '../Components/Header';
import NavigationButtons from '../Components/NavigationButtons';
import '../Styles/AfterLogin.css';
import CountUp from '../Components/CountUp';  // Ensure the correct path
import moroccoTeam from '/logo/Team-Maroc.png'
import franceTeam from "/logo/Team-France.png"

function AfterLogin() {
  return (
    <div>
      <Header />
      <div className='countup'>
      <CountUp/>
    
      <div className='team'>
      
      <img src={moroccoTeam} height={"150px"} alt="" />
      <h4>VS</h4>
      <img src={franceTeam} height={"150px"}  alt="" />
  
      </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default AfterLogin;
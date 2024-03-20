import React from 'react';
import './Employeehome.css';
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";



const H1 = () => {
  const navigate = useNavigate();
  return (
    <div>

      <div className='topnav1' >

        <a className="ab" href='/Employeehome'> HOME</a>
        <a className="ab" href='/Work'> WORKS</a>
        <a className="ab" href='/Ourteam'> OUR TEAM</a>
        <a className="ab" href='/About'> ABOUTS</a>
        <button className='bt' onClick={() => navigate('/')}>SIGN-IN</button>

        <span >
          <div class="dropdown">
            <button class="dropbtn"><CgProfile />profile</button>
            <div class="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default H1;

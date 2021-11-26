import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'
const url ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCD-FHOtkSS7_Rq-mgs81q8J87Ff_n6R25zxlAUJkZGseAob43BvRetYp4Nl-v89B6NKc&usqp=CAU';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light headerbg">
            <div className="container-fluid">
            <NavLink className='navlink' to = "/#"> 
            <div>
                
                <h2>
                <img className='nav-img' src={url} alt="" />
                    <span>Programming-Skill-Center</span>
                </h2>
            </div>
            </NavLink>
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse"                 id="navbarNavAltMarkup">
                    <div className="navbar-nav  ">
                        <NavLink className='navlink link '  to = "/home">Home</NavLink>
                        <NavLink  className='navlink link' to = "/services">All Services</NavLink>
                        <NavLink  className='navlink link' to = "/about">About Us</NavLink>
                        <NavLink  className='navlink link' to = "/students">Our Students</NavLink>
                    </div>
                </div>
             </div>
        </nav>
        
        
       
    );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const header = () => {
    
    return (
        <div className='header'>
          
           <h1>WELCOME TO MY BLOG</h1>
           <nav>
               <Link to='/blog'> Blog</Link>
               <Link to='/profile'>My Profile </Link>
               <Link to='/user'> User</Link>   
           </nav>
          
        </div>
    );
};

export default header;
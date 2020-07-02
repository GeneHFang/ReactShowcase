import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Navbar.css';


const Navbar = () => {
    return(
        <div className="NavBar">
            <NavLink to="3Col" exact>
                <button>
                    3 Columns
                </button>
            </NavLink>
            <NavLink to="/" exact>
                <button>
                    Home
                </button>
            </NavLink>
        </div>
    )
}

export default Navbar;
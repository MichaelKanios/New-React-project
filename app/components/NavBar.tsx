import { NavLink } from "react-router";
import { FaTimes ,FaBars } from "react-icons/fa";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { useState } from "react";

const NavBar =()=>{

    const [menuOpen, setMenuOpen] = useState(false);

    const active= "text-blue-400 font-semibold "
    const base="transition hover:text-blue-400"

    return (<>


      <nav>
            <ul className="hidden md:flex justify-center items-center gap-8 p-4 bg-gray-800 text-white">               
                <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/">News</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/sports">Sports</NavLink></li>
                <li className="flex flex-col items-center"> 
                    <IoLogoFreebsdDevil className="text-4xl mb-1"/>
                    <span className="text-center">Devil News</span>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/cantina">Cantina</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/about">About</NavLink></li>
            </ul>
        </nav>

         

        <nav className="flex items-center md:hidden p-4 bg-gray-800 text-white">
            <ul className="flex items-center space-x-4">
                <IoLogoFreebsdDevil className="text-4xl mb-1"/>
                <li><NavLink to="/">News</NavLink></li>
                <li><NavLink to="/sports">Sports</NavLink></li>
                <li><NavLink to="/cantina">Cantina</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <FaBars className="ml-auto" />
            <FaTimes className="ml-auto" />
        </nav>

    </>

    
      
      
    );
}

export default NavBar; 
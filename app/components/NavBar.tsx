import { NavLink } from "react-router";
import { FaTimes ,FaBars } from "react-icons/fa";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { useState } from "react";

const NavBar =()=>{

    const [menuOpen, setMenuOpen] = useState(false);

    const active= "text-blue-400 font-semibold "
    const base="transition hover:text-blue-400"

    return (<>

            <nav className="bg-gray-800 text-white p-4 md:p-2 flex items-center relative">
                {/* Desktop Menu */}
                <ul className="hidden md:flex justify-center items-center gap-8 w-full p-4 bg-gray-800 text-white">
                    <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/">News</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/sports">Sports</NavLink></li>
                    <li className="flex flex-col items-center"> 
                        <IoLogoFreebsdDevil className="text-4xl mb-1"/>
                        <span className="text-center">Devil News</span>
                    </li>
                    <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/cantina">Cantina</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? active : base)} to="/about">About</NavLink></li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                     <IoLogoFreebsdDevil className="text-3xl mb-1 "/>
                         <span className="ml-2 md:ml-4">Devil News</span>
                                         </div>

               

                <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden ml-auto" aria-label="Toggle menu">
                    {menuOpen ? <FaTimes /> : <FaBars />}  
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="flex justify-around md:hidden absolute top-full left-0 w-full bg-gray-800 p-4 space-y-4 z-10">
                       
                        <li><NavLink className={({isActive})=>(isActive ?active :base)} to="/">News</NavLink></li>
                        <li><NavLink className={({isActive})=>(isActive ?active :base)} to="/sports">Sports</NavLink></li>
                        <li><NavLink className={({isActive})=>(isActive ?active :base)} to="/cantina">Cantina</NavLink></li>
                        <li><NavLink className={({isActive})=>(isActive ?active :base)} to="/about">About</NavLink></li>
                    </ul>
                )}
            </nav>


    

       
        
    </>

    
      
      
    );
}

export default NavBar; 
import { useState } from "react";
import './Navbar.css';
import{NavLink} from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Hamburger(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    const links = [
        {
          id: 1,
          path: "/",
          text: "Inicio",
        }, 
        {
          id: 2,
          path: "/Contacto",
          text: "Contactame",
        }
      ]



    const handleToggle=()=>{
        setNavbarOpen(!navbarOpen);
    }
    console.log('hola soy navbarOpen',navbarOpen);
    const closeMenu=()=>{
        setNavbarOpen(false);
    }
   
    return(
        
            <nav className="navbar">
              <button onClick={handleToggle} className="buttonNavBar">
                  {navbarOpen ?
                   <MdClose 
            style={{color: "rgb(200, 7, 7)", 
                    width: "20px", 
                    height: "20px" }} 
          /> : 
          <FiMenu 
            style={{color:" rgb(7, 0, 0)", 
                    width: "20px",
                     height: "20px",
                     
                    }} 
          />}
              </button>
              <ul className={`menuNav ${navbarOpen ? " showMenu": ""}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink 
                to={link.path} 
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
             
            </nav>
        

    )
}
 export default Hamburger;
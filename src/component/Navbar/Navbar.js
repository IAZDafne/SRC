import { useState } from "react";
import React,{useEffect} from "react"; 
import './Navbar.css';

function Navbar({ width, height, children }) {
  const [xPosition, setX] = useState(-width);
  const [click, setClick, isOpen, setisOpen] = useState(false);
  const [button, setButton] = useState(true)
  console.log('hola soy clik',click);
  console.log('hola soy button',button);
  console.log('hola soy isOpen',isOpen);


const toggle =() => setisOpen(!isOpen);
const hide = () => setisOpen(false);
const hamdleClick = () => setClick(!click);



  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };
 
  useEffect(() => {
    setX(0);
  }, []);
 
  return (
    <div>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        _/>
           <div className="content">{children}</div>
      </div>
    
    </div>
  );
}
export default Navbar;

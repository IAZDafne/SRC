import React from 'react'
import emailjs from 'emailjs-com';
import Hamburger from '../Navbar/Prueba1'
import Logo from '../Logos/Logo'
import Redes from "../Redes/Redes";
import Pie from '../Pie/Pie'
import "./Contacteme.css"






function Contactame (){
    
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("service_b6ecocc","template_3idwc0o", e.target, 'user_tOflv1RBoK0Er2KlcbGcP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert(`Mensaje enviado`);
          
      }

    return(
        <div className ="contacto">
        <Hamburger/>
        <Logo/>
        <div className='formulario'>
            <div className ='formulario-contacto'>
            <h3 className='titulo'>Contactanos por Correo </h3>
            <form className="contact-form"  >
                <div className="form-group"> 
                    <input type="hidden" name="to_name" className='inputs' />
                     <label className='etiqueta'>Nombre: </label>
                     <input type="text" name="from_name" className='inputs'/>
                </div> 
                <div className="form-group">
                     <label className='etiqueta'>Correo: </label>
                     <input type="email" name="message"className='inputs' />
                </div>
                <div className="form-group">
                    <label className='etiqueta'>Mensaje: </label>
                    <textarea minlength="4" maxlength="358" size="10" name="message"className='inputs' />
                </div>
              <button type="submit" className='enviar'>Enviar</button>
     
    </form>
           </div> 
                
  
             <Redes/>  
            <hr/>  
             <Pie/>
           
            
             </div>

             

         </div>

    )
}
export default Contactame
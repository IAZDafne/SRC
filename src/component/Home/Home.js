import React from "react";
import  {Carousel}  from 'react-carousel-minimal';
import Hamburger from "../Navbar/Prueba1";
import Pie from "../Pie/Pie";
import Logo from "../Logos/Logo";

import './Home.css';

function Home() {

  const data = [
    {
      image:"https://res.cloudinary.com/df8f7pqh4/image/upload/v1641949084/Sistemas%20de%20riego%20/MASTER-repse_aebvbs.jpg",
      caption:'Ya Contamos con REPSE'

    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616716/Sistemas%20de%20riego%20/riego1_hpel1t.jpg",
      caption: ' BootCamp Henry '
    }, 
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616715/Sistemas%20de%20riego%20/riego2_iqwlsm.jpg",
      caption: "SCRUM"
    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616704/Sistemas%20de%20riego%20/riego6_djghxz.jpg",
      caption: "SCRUM"
    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616715/Sistemas%20de%20riego%20/riego2_iqwlsm.jpg",
      caption: "SCRUM"
    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616704/Sistemas%20de%20riego%20/riego5_f6qpw9.jpg",
      caption: "SCRUM"
    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616704/Sistemas%20de%20riego%20/riego4_qhxgj9.jpg",
      caption: "SCRUM"
    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616704/Sistemas%20de%20riego%20/riego7_hqe10b.jpg",
      caption: "SCRUM"
    },
    {
      image: "https://res.cloudinary.com/df8f7pqh4/image/upload/v1641616703/Sistemas%20de%20riego%20/riego3_eqcojd.jpg",
      caption: "SCRUM"
    },
   
  
  
  
  ]
   
    const captionStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
        color: 'Yellow'
      }
      const slideNumberStyle = {
        fontSize: '10px',
        fontWeight: 'bold',
      }

  return (
    <div className="total">
       <div className="carousel">
       <Hamburger/>
         <Carousel
           data={data}
            time={5000}
            width="1360px"
            height="350px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="20px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              maxWidth: "1360px",
              maxHeight: "800px",
              margin: "0px auto",
              color: "black",
              marginLeft: "50px",
            }}/>
            
            <Logo/> 
             <div className="Yaotzin">   
              <p>
                Sistemas de riego de Celaya es una
                empresa con más de 12 años de
                experiencia en la instalación de
                sistemas de riego y jardinería en la
                zona del bajio.
              </p>
              <h3 className="titulos"> MISIÓN</h3>
              <p>
                  Contribuir al desarrollo de las instalaciones de riego, poniendo a
                  disposición del cliente productos y servicios de excelente calidad para
                  cualquier aplicación y para todo tipo de soluciones técnicas,
                  gestionando los negocios de manera que creen valor para la compañía
                  a la vez que para la sociedad.
              </p>
              <h3 className="titulos">VISIÓN</h3>

              <p>
                  Consolidarnos como una de las empresas líder del sector, ser la
                  principal compañía de confianza y solvencia técnica en la región, para
                  desarrollar sistemas de riego a empresas de todo tipo ,y residencias,
                  desde el diseño y construcción siempre comprometidos con la
                  incorporación de nuevas tecnologías en busca de un mejor
                  aprovechamiento de los recursos naturales
              </p>
              <h3 className="titulos">Valores</h3>
                <ul>
                  <li>Honestidad</li>
                   <li>Responsabilidad</li>
                    <li>Honradez</li>
                    <li>Trabajo en equipo</li>
                </ul>
                </div>
          <hr/>
          <Pie/>
          </div>
        </div>
  );
}

export default Home;
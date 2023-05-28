import React, { useState } from 'react'
import './card.css'
/*import foto from ".../assets/foto.png"*/

/*function Foto ({ nombre, numFoto, num }) {
    if (numFoto =num ) {

return <li className="item">{nombre} ✓</li>

}
return <li className="item">{nombre} </li>
}*/

function Card({ name, about, job,img1,}) {

  return (
    <div className='card'>
      <div className='contenedor_imagen'>
        <div className='imagen'>
        <img src={img1} alt="imagen 1" />
        </div>
      </div>
      <div className='contenido'>
        <h3 className='nombre'> {name} </h3>
        <div className='descripcion'>
          <h4> {job} </h4>
          <p>  {about} </p>
        </div>
      </div>
    </div>
    
  )
}

export default Card;

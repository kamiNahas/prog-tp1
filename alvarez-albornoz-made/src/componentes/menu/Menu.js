import "./menu.css"
function Menu() {
  return (
    <div>
      <ul className="menu">
        <li className="fila"><button className="boton">SERVICIOS</button></li> 
        <li className="fila"><button className="boton">DESTINO</button></li>
        <li className="fila"><button className="boton">TU VUELO</button></li>
      </ul>
    </div>
  )
}
export default Menu;
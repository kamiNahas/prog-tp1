import './App.css';
import Content from './componentes/content/Conten';
import Card from './componentes/content/card/Card';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Menu from './componentes/menu/Menu';
import SideBar from './componentes/sidebar/Sidebar';

function App() {
  return (

    <div className="contenedor">

      <div className="cont_header bordes">
        <Header />
      </div>
      <div className="cont_menu bordes">
        <Menu />
      </div>
      <div className="cont_content bordes">
        <div>
          <Content />
          
        
        </div>
      </div>
      <div className="cont_sideBar bordes">
        <SideBar />
      </div>
      <div className="cont_footer bordes">
        <Footer/>
      </div>
      
    </div>

  );
}

export default App;

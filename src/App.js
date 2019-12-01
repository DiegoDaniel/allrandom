import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import imgBanner from './img/background_2.jpg';
//React Router import 
import { Switch, Route} from 'react-router-dom';
//Import pages
import Home from './components/pages/Home';
import Torneos from './components/pages/Torneos';
import MiCalendario from './components/pages/MiCalendario';
import Historial from './components/pages/Historial';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render(){
  return (
    <div>
      <NavBar />
      <div><img src={imgBanner} alt="GarenBanner" className="img-fluid" style={{ height:'30%', width:'100%' }}></img></div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/torneos" component={Torneos}/>
        <Route path="/MiCalendario" component={MiCalendario}/>
        <Route path="/Historial" component={Historial}/>
        <Route path="/404" component={NotFoundPage}/>
      </Switch>
      <Footer />
    </div>
  )};
  
  componentDidMount() {
    document.addEventListener("scroll",this._handleScrollY)
  }
  
  componentWillUnmount() {
    document.removeEventListener("scroll",this._handleScrollY)
  }
  
  _handleScrollY(){
    if(!document.getElementById("navBar").classList.contains("no-trans") && window.pageYOffset===0){
      document.getElementById("navBar").classList.add("no-trans")
    }

    if(document.getElementById("navBar").classList.contains("no-trans") && window.pageYOffset>0){
      document.getElementById("navBar").classList.remove("no-trans")
    }
  }
  
}


export default App;

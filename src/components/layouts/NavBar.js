import React from 'react'
import logo from '../../logo.svg'
import '../../css/header.css'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}
function NavBar() {
    return (
        <div>
            <div className="header" >
                <nav id="navBar" className="navbar fixed-top navbar-expand-lg navbar-light bg-dark no-trans">
                    <Link className="navbar-brand ml-5 no-trans" to="home">
                        <img src={logo} alt="logo" style={{ width:'35px' }}></img>
                    </Link>
                    <button className="navbar-toggler no-trans" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <i className="fas fa-bars" style={{ color:"#fff" }}></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse no-trans" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto no-trans">
                        <li className="nav-item active no-trans">
                            <Link className="nav-link text-white ml-5" to="torneos">Torneos &nbsp;<i className="fas fa-trophy"></i></Link>
                        </li>
                        <li className="nav-item no-trans">
                            <Link className="nav-link text-white ml-5" to="micalendario">Mi Calendario &nbsp;<i className="fas fa-calendar-check"></i></Link>
                        </li>
                        <li className="nav-item no-trans">
                            <Link className="nav-link text-white ml-5"to="historial">Historial &nbsp;<i className="fas fa-clipboard-list"></i></Link>
                        </li>
                        </ul>
                        <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                            {/* <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li>*/}
                            <li className="dropdown order-1">
                                <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-dark dropdown-toggle text-white">Ingresar <span className="caret"></span></button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="px-5 py-2">
                                        <FacebookLogin
                                            appId="1088597931155576"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            callback={responseFacebook}
                                            cssClass="customFacebookButton"
                                            textButton="Facebook LogIn"
                                            icon={<i className='fab fa-facebook-square' style={{marginLeft:'5px'}}>&nbsp;&nbsp;&nbsp;</i>}/>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
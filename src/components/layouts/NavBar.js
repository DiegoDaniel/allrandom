import React, { Component } from 'react'
import logo from '../../logo.svg'
import '../../css/header.css'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';

class NavBar extends Component {
    state = {
        isLoggedIn:false,
        userID:'',
        name:'',
        email:'',
        picture:''
    }

    logOut = () => {
        this.setState({
            isLoggedIn:false,
            userID:'',
            name:'',
            email:'',
            picture:''
        }, () => {
            window.FB.logout();
        })
    }

    responseFacebook = (response) => {
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        }, () => {
            //Do something
        })
    }

    getSummonerData_1(){
        document.getElementById("btnModalGetSummonerData").disabled = true;
        console.log(process.env.REACT_APP_API_KEY);
        
    }

    render(){
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div>
                    <img onClick={this.clickProfile} id="dropdownMenu1" data-toggle="dropdown" className="user dropdown-toggle" src={this.state.picture} alt={this.state.name} style={{ width:'35px' }}></img>
                    <ul className="dropdown-menu dropdown-menu-right pointer" role="button">
                        <li>
                            <div>
                                <p style={{ margin:'auto', cursor:'pointer!important'}} className="text-center" onClick={this.logOut}>Salir</p>
                            </div> 
                        </li>
                    </ul>
                </div>
                
            )
        }else{
            fbContent = (<FacebookLogin
                appId="2457006397848385"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="customFacebookButton"
                textButton="Ingresar"
                icon={<i className='fab fa-facebook-square'>&nbsp;&nbsp;</i>}/>)
        }

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
                            <ul className="nav navbar-nav no-trans flex-row ml-5">
                                {fbContent}
                            </ul>
                        </div>
                    </nav>
                </div>
                <button id="btnModalRelAcc" data-toggle="modal" data-target="#modalRelacionarAcc" style={{ display:'none'}} ></button>
                <div id="modalRelacionarAcc" className="modal bd-example-modal-lg fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Cuentas Asociadas</h3>
                                <button type="button" className="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Relacionaremos tu cuenta de <b>ALL RANDOM</b> con la de <b>LoL</b></p>
                                <br />
                                <p>Ingresa tu Nick:</p>
                                <div className=" modal-body row">
                                    <input className="nickNameForm" type="text"></input> &nbsp; &nbsp;<button id="btnModalGetSummonerData" className="btn" onClick={this.getSummonerData_1}>Check</button>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button id="btnModalAsociar" disabled className="btn btn-primary">Asociar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
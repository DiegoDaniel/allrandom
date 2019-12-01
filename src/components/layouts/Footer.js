import React from 'react'
import '../../css/footer.css'

function Footer() {
    return (
        <div className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/*COL 1*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Cont&aacute;ctenos</h4>
                        <ul className="list-unstyled">
                            <br />
                            <li><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Eridamus LoL</li>
                            <li><i className="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;All Random</li>
                            <li><i className="far fa-envelope"></i>&nbsp;&nbsp;galarza.diego21@gmail.com</li>
                            <li><i className="fas fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;+54 9 11 4409-6973</li>
                        </ul>
                    </div>
                    {/*COL 2 VACIA*/}
                    <div className="col-md-3 col-sm-6"></div>
                    {/*COL 3*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem, ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                        </ul>
                    </div>
                    {/*COL 4*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem, ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                            <li><a href="/">Lorem link</a></li>
                        </ul>
                    </div>
                </div>
                {/*FOOTER COPYRIGHT*/}
                <div className="row">
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Comunidad All Random - Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;

import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from '../../components/Navigation'
import Dashboard from '../../pages/dashboard/Dashboard'
import ListaTalleres from '../../pages/talleres/talleres/Lista'
import ListaTemporadas from '../../pages/talleres/temporadas/Lista'
import ListaSecciones from '../../pages/talleres/secciones/Lista'
import ListaCategorias from '../../pages/talleres/categorias/Lista'
import ListaAlumnos from '../../pages/talleres/alumnos/Lista'
import ListaProfesores from '../../pages/talleres/profesores/Lista'
import ListaPagosEnLinea from '../../pages/talleres/pagos-en-linea/Lista'


import './Admin.css';



export default class Admin extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                    <div id="app-header" className="app-header header-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src"></div>
                            <div className="header__pane ml-auto">
                                <div>
                                    <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                                    </span>
                                </button>
                            </span>
                        </div>
                        <div className="app-header__content">
                            <div className="app-header-left">
                                <div className="search-wrapper">
                                    <div className="input-holder">
                                        <input type="text" className="search-input" placeholder="Type to search" />
                                        <button className="search-icon"><span></span></button>
                                    </div>
                                    <button className="close"></button>
                                </div>
                            </div>
                            <div className="app-header-right">
                                <div className="header-btn-lg pr-0">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <div className="btn-group">
                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                        <img width="42" className="rounded-circle" src="static/media/user.png" alt="" />
                                                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="widget-content-left  ml-3 header-user-info">
                                                <div className="widget-heading">Stalin Huallullo</div>
                                                <div className="widget-subheading">Administrador</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-main">
                        <div className="app-sidebar sidebar-shadow bg-night-sky sidebar-text-light">
                            <div className="app-header__logo">
                                <div className="logo-src"></div>
                                <div className="header__pane ml-auto">
                                    <div>
                                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="app-header__mobile-menu">
                                <div>
                                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="app-header__menu">
                                <span>
                                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                        <span className="btn-icon-wrapper">
                                            <i className="fa fa-ellipsis-v fa-w-6"></i>
                                        </span>
                                    </button>
                                </span>
                            </div>
                            <div className="scrollbar-sidebar">
                                <div className="app-sidebar__inner">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/dashboard/talleres/" component={ListaTalleres} />
                                <Route path="/dashboard/temporadas/" component={ListaTemporadas} />
                                <Route path="/dashboard/secciones/" component={ListaSecciones} />
                                <Route path="/dashboard/categorias/" component={ListaCategorias} />
                                <Route path="/dashboard/alumnos/" component={ListaAlumnos} />
                                <Route path="/dashboard/profesores/" component={ListaProfesores} />
                                <Route path="/dashboard/pagos-en-linea/" component={ListaPagosEnLinea} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-drawer-overlay d-none animated fadeIn"></div>
                <script src="${@helper.assets('jsc/principal.js')}"></script>
                
                        
                <div>__CONTENIDO_MODULAR_FOOTER__</div>
                
            </BrowserRouter>
        )
    }
}

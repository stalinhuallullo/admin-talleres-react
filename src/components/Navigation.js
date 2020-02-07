import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="vertical-nav-menu">
                    <li className="app-sidebar__heading">MODULOS</li>
                    <li><Link to="#"><i className="metismenu-icon pe-7s-global"></i>Inicio</Link></li>
                    
                    <li className="mm-active">
                        <Link to="#"><i className="metismenu-icon pe-7s-culture"></i>Talleres<i className="metismenu-state-icon pe-7s-angle-down caret-left"></i></Link>
                        <ul>
                            <li><Link to="/dashboard/talleres"><i className="metismenu-icon"></i>Lista de talleres</Link></li>
                            <li><Link to="/dashboard/temporadas"><i className="metismenu-icon"></i>Temporadas</Link></li>
                            <li><Link to="/dashboard/secciones"><i className="metismenu-icon"></i>Secciones</Link></li>
                            <li><Link to="/dashboard/categorias"><i className="metismenu-icon"></i>Categorias</Link></li>
                            <li><Link to="/dashboard/alumnos"><i className="metismenu-icon"></i>Alumnos</Link></li>
                            <li><Link to="/dashboard/profesores"><i className="metismenu-icon"></i>Profesores</Link></li>
                            <li><Link to="/dashboard/pagos-en-linea"><i className="metismenu-icon"></i>Pagos por internet</Link></li>
                        </ul>
                    </li>

                    <li className="app-sidebar__heading">CONFIGURACION</li>
                    <li><Link to="#"><i className="metismenu-icon pe-7s-angle-left-circle"></i>Cerrar sesión</Link></li>
                </ul>
            </div>
        )
    }
}

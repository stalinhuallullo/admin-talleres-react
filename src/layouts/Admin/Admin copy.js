import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import {BrowserRouter, Route} from 'react-router-dom'


import Navigation from '../../components/Navigation'

import Seccion from '../../pages/talleres/secciones'
import Alumno from '../../pages/talleres/alumnos'
import Temporada from '../../pages/talleres/temporadas'


import './Admin.css';

export default class Admin extends Component {
    render() {
        return (
            <BrowserRouter>
                <Helmet>
                    <title>Panel administrativo</title>
                    <meta name="description" content="Panel administrativo" />
                </Helmet>

                <header>
                    <h2>HEADER</h2>
                </header>

                <section>
                    <nav>
                        <Navigation />
                    </nav>
                    
                    <article>
                        <h1>CONTENT</h1>
                        <Route path="/talleres/secciones" exact component={Seccion} />
                        <Route path="/talleres/alumnos" exact component={Alumno} />
                        <Route path="/talleres/temporadas" exact component={Temporada} />
                    </article>
                </section>

                <footer>
                    <p>Footer</p>
                </footer>

            </BrowserRouter>
        )
    }
}

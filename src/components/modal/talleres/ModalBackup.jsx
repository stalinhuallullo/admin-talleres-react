import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";


import './modal.css'

// https://medium.com/@a.carreras.c/building-custom-modals-in-your-react-js-app-15718434527a
// https://www.npmjs.com/package/jodit-react
const Modal = props => {

  const editor = useRef(null)
  const [content, setContent] = useState('')
  var listaHorario = {
    contador: 1,
    index: 1,
    diplayHorario: []
  }
    
  const config = {
      readonly: false
  }
  
  function displayButton () {
    switch(props.modalModo) {
      case 'crear':
        return <button type="submit" className="btn btn-success btn-crear-categoria"><i className="fa fa-plus-circle"></i> Crear Categoría</button>
      case 'editar':
        return <button type="submit" className="btn btn-primary btn-editar-categoria"><i className="fa fa-plus-circle"></i> Editar Categoría</button>
      default:
        return null
    }
  } 

  function closeModal (e) {
    e.stopPropagation()
    props.closeModal()
  }
  
 
  function agregarHorario() {
    listaHorario.contador++;

    
    mostrarHorario();
  }
  
  var mostrarHorario = () => {
    console.log("mey");
    let header = listaHorario.contador
/*
    listaHorario.diplayHorario = <div className="col-md-custom">
                                      <div className="custom-input">
                                      <div className="col-md-12">
                                          <div className="row">
                                          <div className="col-md-6">
                                              <div className="position-relative row form-group">
                                              <label className="col-sm-2 col-form-label text-right">Horario</label>
                                              <div className="col-sm-10">
                                                  <div className="input-group">
                                                  <input name="slug" id="slug" type="text" className="form-control"/>
                                                  </div>
                                              </div>
                                                          
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="position-relative row form-group">
                                              <label className="col-sm-2 col-form-label text-right">Horario</label>
                                              <div className="col-sm-10">
                                                  <div className="input-group">
                                                  <input name="slug" id="slug" type="text" className="form-control"/>
                                                  <input name="slug" id="slug" type="text" className="form-control"/>
                                                  </div>
                                              </div>
                                                          
                                              </div>
                                          </div>
                                          </div>
                                      </div>
                                      </div>
                                      <div className="custom-controls">
                                      <button type="button" className="btn btn-danger btn-lg"><i className="fa fa-trash-alt fa-w-20"></i></button>
                                      </div>
                                  </div>

    console.log("listaHorario.diplayHorario", listaHorario.diplayHorario)
    return listaHorario.diplayHorario;*/
  }

  let modal = (

    <>
    <div className="modal fade form-categoria-modal show" onClick={ closeModal }>
      <div className="modal-dialog modal-lg modal-90w">
        <div className="modal-content" onClick={ e => e.stopPropagation() }>
          <div className="modal-header">
            <h5 className="modal-title" id="title-categoria-modal">Información de taller</h5>
          </div>
          <form method="post" id="form-categoria" name="form-categoria">
            <div className="modal-body">
                <input type="hidden" name="id" id="id" />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="position-relative row form-group">
                      <label className="col-sm-2 col-form-label text-right">Temporada</label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          {/*<div class="input-group-prepend"><span class="input-group-text">Temporada</span></div>*/}
                          <input type="text" name="slug" id="slug" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <div className="position-relative row form-group">
                      <label className="col-sm-2 col-form-label text-right">Taller</label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input name="slug" id="slug" type="text" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>

                  <div className="col-sm-6">
                    <div className="position-relative row form-group">
                      <label className="col-sm-2 col-form-label text-right">Categoría</label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input name="slug" id="slug" type="text" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <div className="position-relative row form-group">
                      <label className="col-sm-2 col-form-label text-right">Profesor</label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input name="slug" id="slug" type="text" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>
                  

                  <div className="col-sm-12">
                    <div className="position-relative row form-group">
                      <label className="col-sm-1 col-form-label text-right">Lugar</label>
                      <div className="col-sm-11">
                        <div className="input-group">
                          <input name="slug" id="slug" type="text" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" variant="dark" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>

                  <div className="col-sm-6">
                    <div className="position-relative row form-group mb-0">
                      <label className="col-sm-2 col-form-label text-right">N° de cupos</label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input name="slug" id="slug" type="text" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <div className="position-relative row form-group mb-0">
                      <label className="col-sm-2 col-form-label text-right">Fecha disponible</label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input name="slug" id="slug" type="text" className="form-control"/>
                          <div className="input-group-append">
                            <button type="button" className="btn btn-dark"><i className="fa fa-plus-circle fa-w-20"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>

                  <div className="col-md-11 offset-md-1"><hr/></div>


                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12">
                        { () => this.mostrarHorario  }
                        <div className="content-button">
                          <div className="input-group-append">
                            <button type="button" className="btn btn-primary btn-lg ml-15" onClick={ agregarHorario }><i className="fa fa-plus fa-w-20"></i></button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  

                  <div className="col-md-11 offset-md-1"><hr/></div>

                  <div className="col-md-12">
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                      onChange={newContent => {}} />
                  </div>
                </div>

            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" onClick={ closeModal } data-dismiss="modal">Cancelar</button>
              {displayButton()}
            </div>
          </form>

        </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
      </>
  )

  return ( props.displayModal ? modal : null);
}
export default Modal;
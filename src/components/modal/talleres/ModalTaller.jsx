import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
//import Dropzone  from 'react-dropzone'

import DropzoneComponent from './DropzoneComponent'

const ModalTaller  = (props) => {
  console.log("props", props.modo);


  //const [show, setShow] = useState({modal: true, modo: props.modo.modalModo});
  var [show, setShow] = useState({modal: props.modo.modal, modo: "props.modo.modalModo"});
  //var show = {modal: props.modo.modal, modo: props.modo.modalModo}
  console.log("show", show);


  var handleClose = () => { 
      
      show = {modal: false, modo: "close" }//setShow(false);
      console.log("show", show);
      setShow(show);
  }
  var handleShow = () =>  setShow({modal: true, modo: props.modo.modalModo}) //setShow({modal: true, modo: props.modo.modalModo});

  const editor = useRef(null)
  const [content, setContent] = useState('')
  var listaHorario = {
      contador: 0,
      index: 0,
      diplayHorario: []
  }
  const config = {
      readonly: false
  }
  
  //setShow({modal: props.modo.modal, modo: props.modo.modo})
  

  const displayButton = () => {
      
      switch(props.modo.modalModo) {
        case "crear":
          return <Button type="submit" variant="success" className="btn-crear-categoria"><i className="fa fa-plus-circle"></i> Crear Categoría</Button>; break;
        case "editar":
          return <Button type="submit" variant="primary" className="btn-editar-categoria"><i className="fa fa-plus-circle"></i> Editar Categoría</Button>; break;
        default:
          return null;
      }
  } 
  var mostrarHorario = () => {
  //function mostrarHorario () {
      var rows = [];

      //for (var i = 0; i < listaHorario.contador; i++) {
          var key = listaHorario.contador//(i+1);
          console.log("num => ", key);

          var list = 
              <div className="col-md-custom" key={key}>
                  <div className="custom-input">
                  <div className="col-md-12">
                      <div className="row">
                      <div className="col-md-6">
                          <div className="position-relative row form-group">
                          <label className="col-sm-2 col-form-label text-right">Horario</label>
                          <div className="col-sm-10">
                              <div className="input-group">
                              <input type="text" className="form-control"/>
                              </div>
                          </div>
                                      
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="position-relative row form-group">
                          <label className="col-sm-2 col-form-label text-right">Horario</label>
                          <div className="col-sm-10">
                              <div className="input-group">
                              <input type="text" className="form-control"/>
                              <input type="text" className="form-control"/>
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
          listaHorario.diplayHorario.push(list);
      //}
      return listaHorario.diplayHorario;
  }

  function agregarHorario () {
      listaHorario.contador++;
      console.log(listaHorario.contador);
      mostrarHorario();
  }

  

  return (
      <>
      <Button variant="success" onClick={ () => handleShow({modal: true, modo: props.modo.modalModo}) }><i className="fa fa-plus-circle fa-w-20"></i> Nuevo</Button>

      <Modal 
          show={ show.modal } 
          onHide={ handleClose }
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          >
          <Modal.Header closeButton>
              <Modal.Title>Información de taller</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form method="post" id="form-categoria" name="form-categoria">
              <div className="modal-body">
                  <input type="hidden" name="id" id="id" />
                  <div className="row">
                      <div className="col-md-12">
                          <div className="col-md-12">
                            <div className="position-relative row form-group">
                                {/* <Button variant="primary" size="lg" block>Agregar imagenes</Button> */}
                                <DropzoneComponent />
                            </div>
                          </div>
                      </div>
                  <div className="col-sm-6">
                      <div className="position-relative row form-group">
                      <label className="col-sm-2 col-form-label text-right">Temporada</label>
                      <div className="col-sm-10">
                          <div className="input-group">
                          <input type="text" className="form-control"/>
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
                          <input type="text" className="form-control"/>
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
                          <input type="text" className="form-control"/>
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
                          <input type="text" className="form-control"/>
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
                          <input type="text" className="form-control"/>
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
                          <input type="text" className="form-control"/>
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
                          <input type="text" className="form-control"/>
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
                              {
                                  /*listaHorario.diplayHorario.map((item, key) =>
                                      <p key={key}>mey</p>
                                  )*/
                              }
                              {/* (listaHorario.contador > 0) ? listaHorario.diplayHorario : mostrarHorario()   */}
                              { mostrarHorario() }
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
                  <button type="button" className="btn btn-dark" onClick={ handleClose } data-dismiss="modal">Cancelar</button>
                  { displayButton() }
              </div>
          </form>
          </Modal.Body>
          {/*<Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Close
              </Button>
              { displayButton() }
          </Modal.Footer>*/}
      </Modal>
    </>
  )

}
export default ModalTaller;
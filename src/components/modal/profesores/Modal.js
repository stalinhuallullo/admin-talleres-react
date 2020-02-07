import React from 'react';


import './modal.css'

// https://medium.com/@a.carreras.c/building-custom-modals-in-your-react-js-app-15718434527a
const Modal = props => {

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

  let modal = (
    <>
    <div className="modal fade form-categoria-modal show" onClick={ closeModal }>
      <div className="modal-dialog modal-lg modal-90w">
        <div className="modal-content" onClick={ e => e.stopPropagation() }>
          <div className="modal-header">
            <h5 className="modal-title" id="title-categoria-modal">Información de temporada</h5>
          </div>
          <form method="post" id="form-categoria" name="form-categoria">
            <div className="modal-body">
                <input type="hidden" name="id" id="id" />
                <div className="position-relative row form-group">
                  <label className="col-sm-2 col-form-label text-right">Nombre:</label>
                  <div className="col-sm-10">
                      <input name="nombre" id="nombre" type="text" className="form-control" />
                  </div>
                </div>
                <div className="position-relative row form-group">
                  <label className="col-sm-2 col-form-label text-right">Apellido Paterno:</label>
                  <div className="col-sm-10">
                      <input name="nombre" id="nombre" type="text" className="form-control" />
                  </div>
                </div>
                <div className="position-relative row form-group">
                  <label className="col-sm-2 col-form-label text-right">Apellido Materno:</label>
                  <div className="col-sm-10">
                      <input name="nombre" id="nombre" type="text" className="form-control" />
                  </div>
                </div>
                <div className="position-relative row form-group">
                  <label className="col-sm-2 col-form-label text-right">Dni:</label>
                  <div className="col-sm-10">
                      <input name="nombre" id="nombre" type="text" className="form-control" />
                  </div>
                </div>
                <div className="position-relative row form-group">
                  <label className="col-sm-2 col-form-label text-right">Teléfono:</label>
                  <div className="col-sm-10">
                      <input name="nombre" id="nombre" type="text" className="form-control" />
                  </div>
                </div>

            </div>
            
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={ closeModal } data-dismiss="modal">Cancelar</button>
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
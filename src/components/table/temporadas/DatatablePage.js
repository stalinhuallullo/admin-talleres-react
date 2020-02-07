import React from 'react'
import { MDBDataTable } from 'mdbreact'

// https://mdbootstrap.com/docs/react/tables/search/
const DatatablePage = props => {
  
  function displayInfo () {
    return props.data;
  } 

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={displayInfo()}
    />
  );
}
export default DatatablePage;
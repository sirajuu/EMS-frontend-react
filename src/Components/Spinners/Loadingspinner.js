import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loadingspinner() {
  return (
    <div className='d-flex justify-content-center mt-5 mb-5'>
        <Spinner animation="grow" variant="secondary" /><span className='ms-2 mt-2'>Loading</span> 
    </div>
  )
}

export default Loadingspinner
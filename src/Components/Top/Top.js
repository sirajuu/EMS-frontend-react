import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Top() {
  return (
    <div>
         <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="/"><i className='fa-solid fa-users text-danger'></i> EMS</Navbar.Brand>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Top
import React from 'react'
import './Register.css'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
function Register() {

  const option=[
    {value:'Active', label:'Active'},
    {value:'InActive', label:'InActive'}

  ]
  return (
    <>
      <div className="container mt-5">
        <h2 className='text-center mt-3'> Register Employee Details</h2>
        <Card className='shadow mt-3 p-3 ' >
          <div className="text-center mb-3">
            <img className='border p-1 rounded-circle' height={'50px'} width={'50px'} src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg" alt="Profile" />

          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicGender">
                <Form.Label>Select Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={"Male"}
                  name='gender'
                  value={"Male"}
                />
                <Form.Check
                  type={"radio"}
                  label={"Female"}
                  name='gender'
                  value={"Female"}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicStatus">
                <Form.Label>Select Employee Status</Form.Label>
               <Select options={option}></Select>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicProfile">
                <Form.Label>Choose Profile Picture</Form.Label>
                <Form.Control type="file" name='user_profile' />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicProfile">
                <Form.Label>Enter Employee Location</Form.Label>
                <Form.Control type="text" placeholder='Enter Employee Location' />
              </Form.Group>
              <Button className='mt-3' variant='primary' >Submit</Button>
            </Row>
          </Form>

        </Card>
      </div>
    </>
  )
}

export default Register
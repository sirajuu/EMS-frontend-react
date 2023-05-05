import React from 'react'
import './Profile.css'
import { Card, Row } from 'react-bootstrap'


function Profile() {
  return (
    <>
       <div className="container">
           <Card className='shadow col-lg-6 mx-auto mt-5'>
            <Card.Body>
              <Row>
                <div className="col">
                  <div className="profile_img d-flex justify-content-center">
                  <img className='border p-1 rounded-circle' height={'150px'} width={'150px'} src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg" alt="Profile" />
                  </div>
                </div>
              </Row>
              <div className="text-center mt-3">
                <h3>siraj</h3>
                <h4><i className="fa-solid fa-envelope text-primary"></i> <span>siraj@gmail.com</span></h4>
                <h4><i className="fa-solid fa-mobile text-primary"></i> <span>894388046879</span></h4>
                <h4><i className="fa-solid fa-mars text-primary"></i> <span>Male</span></h4>
                <h4><i className="fa-solid fa-location-dot text-primary"></i> <span>Tirur</span></h4>
                <h4><i className="fa-solid fa-chart-line text-primary"></i> <span>Active</span></h4>
              </div>
            </Card.Body>

           </Card>
       </div>
    </>
  )
}

export default Profile
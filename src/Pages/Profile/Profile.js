import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Card, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { viewUser } from '../../Services/allApi'
import { BASE_URL } from '../../Services/base_url'



function Profile() {
  

  // get path parameter from associated route
  const {id}=useParams() 
  // console.log(id);

  // state to hold user details
  const [userDetail,setUserDetail]=useState({})

  
// get a particular user details api
const userDetails = async ()=>{
  const {data} = await viewUser(id)
  setUserDetail(data);
}

console.log(userDetail);

useEffect(() => {
  userDetails()
}, [])

  return (
    <>
       <div className="container" style={{height:'70vh'}}>
           <Card className='shadow col-lg-6 mx-auto mt-5'>
            <Card.Body>
              <Row>
                <div className="col">
                  <div className="profile_img d-flex justify-content-center">
                  <img className='border p-1 rounded-circle' height={'150px'} width={'150px'} src={`${BASE_URL}/uploads/${userDetail.profile}`} alt="Profile" />
                  </div>
                </div>
              </Row>
              <div className="text-center mt-3">
                <h3>{`${userDetail.fname} ${userDetail.lname}`}</h3>
                <h4><i className="fa-solid fa-envelope text-primary"></i> <span>{userDetail.email}</span></h4>
                <h4><i className="fa-solid fa-mobile text-primary"></i> <span>{userDetail.mobile}</span></h4>
                <h4><i className="fa-solid fa-mars text-primary"></i> <span>{userDetail.gender}</span></h4>
                <h4><i className="fa-solid fa-location-dot text-primary"></i> <span>{userDetail.location}</span></h4>
                <h4><i className="fa-solid fa-chart-line text-primary"></i> <span>{userDetail.status}</span></h4>
              </div>
            </Card.Body>

           </Card>
       </div>
    </>
  )
}

export default Profile
import React, { useContext, useEffect, useState } from 'react'
import './Edit.css'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { edituser, viewUser } from '../../Services/allApi'
import { BASE_URL } from '../../Services/base_url'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData } from '../../Components/contexts/ContexShare'



function Edit() {
  // use useContext
  const { editdata, setEditdata } = useContext(updateData)

  // useNavigate
  const navigate = useNavigate()

  // get path parameter from associated route
  const { id } = useParams()

  // get a particular user details api
  const userDetails = async () => {
    const { data } = await viewUser(id)
    setInputData(data);
    setStatus(data.status)
    setExistingimg(data.profile)
  }


  const option = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' }
  ]

  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })
  //  status state
  const [status, setStatus] = useState("")

  // to hold image from existing user
  const [existingimg, setExistingimg] = useState("")
  //  image state
  const [image, setImage] = useState("")


  // preview state
  const [preview, setPreview] = useState("")

  // to update inputData state
  const setInputValue = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }
  console.log(inputData);

  // to update status
  const setStatusvalue = (e) => {
    setStatus(e.value)
  }
  console.log(status);

  // to update image
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }
  console.log(image);

  useEffect(() => {
    userDetails()
  },[id])

  useEffect(() => {


    if (image) {
      setExistingimg("")
      setPreview(URL.createObjectURL(image))
    }

  }, [image])

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { fname, lname, email, mobile, gender, location } = inputData
    if (fname === "") {
      toast.error("Firstname required!!!")
    }
    else if (lname === "") {
      toast.error("Lastname required")
    }
    else if (email === "") {
      toast.error("Email required")
    }
    else if (mobile === "") {
      toast.error("Mobile required")
    }
    else if (gender === "") {
      toast.error("Gender required")
    }
    else if (status === "") {
      toast.error("Status required")
    }
    else if (image === "") {
      toast.error("Profile required")
    }
    else if (location === "") {
      toast.error("Location required")
    }
    else {
      // toast.success("Updation Successfully")
      const data = new FormData()
      data.append("user_profile", image || existingimg)
      data.append("fname", fname)
      data.append("lname", lname)
      data.append("email", email)
      data.append("mobile", mobile)
      data.append("location", location)
      data.append("gender", gender)
      data.append("status", status)

      // req header
      const headerConfig = {
        "Content-Type": "multipart/form-data"
      }

      // editUser api call
      const response = await edituser(id, data, headerConfig)
      console.log(response);
      if (response.status === 200) {
        setEditdata(response.data)
        navigate('/')
      }
     
    }
  }
  return (
    <>
      <div className="container mt-5">
        <h2 className='text-center mt-3'> Update Employee Details</h2>
        <Card className='shadow mt-3 p-3 ' >
          <div className="text-center mb-3">
            <img className='border p-1 rounded-circle' height={'50px'} width={'50px'} src={preview ? preview : `${BASE_URL}/uploads/${existingimg}`} alt="Profile" />

          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' placeholder="First Name" value={inputData.fname} onChange={setInputValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name='lname' value={inputData.lname} onChange={setInputValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Email Address" name='email' value={inputData.email} onChange={setInputValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile" name='mobile' value={inputData.mobile} onChange={setInputValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicGender">
                <Form.Label>Select Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={"Male"}
                  name='gender'
                  value={"Male"}
                  checked={inputData.gender == 'Male' ? true : false}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={"Female"}
                  name='gender'
                  value={"Female"}
                  checked={inputData.gender == 'Female' ? true : false}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicStatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select options={option} placeholder={status} onChange={setStatusvalue}></Select>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicProfile">
                <Form.Label>Choose Profile Picture</Form.Label>
                <Form.Control type="file" name='user_profile' onChange={setProfile} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicProfile">
                <Form.Label>Enter Employee Location</Form.Label>
                <Form.Control type="text" placeholder='Enter Employee Location' name='location' value={inputData.location} onChange={setInputValue} />
              </Form.Group>
              <Button onClick={handleSubmit} className='mt-3' variant='primary' >Submit</Button>
            </Row>
          </Form>

        </Card>
      </div>
      {/* toast */}
      <ToastContainer position='top-center' />
    </>
  )
}

export default Edit
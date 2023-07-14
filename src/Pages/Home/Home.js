import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import HomeTable from '../../Components/HomeTable/HomeTable'
import Loadingspinner from '../../Components/Spinners/Loadingspinner'
import { addData, deleteData, updateData } from '../../Components/contexts/ContexShare'
import { deleteuser, getallusers } from '../../Services/allApi'


function Home() {

  // state to hold search key
  const [search,setSearch]=useState("")

  // use useContext
  const { editdata, setEditdata } = useContext(updateData)

  const {deletedata,setDeletedata} = useContext(deleteData)

  // to hold all users
  const [userdata,setUserdata]=useState([])

  // js code
  const navigate = useNavigate()

  // get data from register page
  const {useradd,setUserAdd}=useContext(addData)
console.log(useradd);
 

  const adduser = () => {
    // navigate to register page
    navigate('/Register')
  }

  // api call to get users

  const getallusersData = async()=>{
    const response = await getallusers(search)
    if(response.status===200){
      setUserdata(response.data)
    }
    else{
      console.log('Cannot fetch data!!!');
    }
  }

  console.log(userdata);

  // delete user 
  const deleteUser=async (id)=>{
    // make an api call
    const response = await deleteuser(id)
  console.log(response);
      getallusersData()
     setDeletedata(response.data)
  }

  useEffect (()=>{
    getallusersData()
    setTimeout(() => {
      setShowSpin(false)
    }, 2000);
  },[search])

  // spinner state
  const [showSpin,setShowSpin]= useState(true)

  return (
    <>
    {
      useradd?<Alert variant="success" onClose={() => setUserAdd("")} dismissible>
      {useradd.fname.toUpperCase()} Successfully Registerd..</Alert>:""
    }
     {
      editdata?<Alert variant="success" onClose={() => setEditdata("")} dismissible>
      {editdata.fname.toUpperCase()} Successfully Updated..</Alert>:""
    }
      {
      deletedata?<Alert variant="danger" onClose={() => setDeletedata("")} dismissible>
      {deleteData.fname.toUpperCase()} Successfully deleted..</Alert>:""
    }
      <div className='container mt-5'>
        <div className='first_div'>

          {/* search btn, add employee */}
          <div className='search_Add d-flex justify-content-between'>
            <div className='search col-md-4'>
              <Form className='d-flex'>

                <Form.Control type="text" placeholder="Search" className='me-2' 
                onChange={e=>setSearch(e.target.value)}
                />
                <Button variant='primary'>Search</Button>

              </Form>

            </div>
            <div className='add_btn'>
              <Button onClick={adduser} variant='success'><i className='fa-solid fa-user-plus'></i> Add</Button>
            </div>
          </div>



        </div>
      </div>

      <div className='second_div'>
        {/* table */}

        {
          showSpin? <div className='d-flex justify-content-center mt-5'><Loadingspinner/> </div>:<HomeTable displayData={userdata} 
          deleteUser={deleteUser}
          />
          }
      </div>
    </>
  )
}

export default Home
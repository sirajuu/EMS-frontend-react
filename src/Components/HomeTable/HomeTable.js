import React from 'react'
import { Badge, Card, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../Services/base_url';

function HomeTable({displayData,deleteUser}) {
    console.log(displayData);

    return (
        <>
            <div className='container mt-5'>
                <Row>
                    <div className="col">
                        <Card className='shadow'>
                            <Table className='align-items-center' responsive="sm">
                                <thead className='thead-dark'>
                                    <tr className='table-dark'>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        displayData.length>0? displayData.map((item,index)=>(
<tr>
                                        <td>{index+1}</td>
                                        <td>{item.fname} &nbsp; {item.lname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle  variant={item.status==='Active'?'primary':'danger'}  id="dropdown-basic">
                                               {item.status}
                                                </Dropdown.Toggle>

                                               
                                            </Dropdown>
                                        </td>
                                        <td>
                                            <img height={'40px'} width={'50px'} src={`${BASE_URL}/uploads/${item.profile}`} alt="Profile" />
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic1">
                                                    <i class='fa-solid fa-ellipsis-vertical fs-5'></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link to={`/profile/${item._id}`} className='text-decoration-none' >
                                                            <i className='fa-solid fa-eye text-success me-2'></i>
                                                            <span className=' text-dark'>View</span>
                                                        </Link>

                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <Link to={`/Edit/${item._id}`} className='text-decoration-none'>
                                                            <i className='fa-solid fa-pen text-danger me-2'></i>
                                                            <span>Edit</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <div onClick={()=>deleteUser(item._id)}>
                                                            <i className='fa-solid fa-trash text-danger me-2 '></i>
                                                            <span className=' text-dark'>Delete</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                        ))
                                    :
                                    <tr className='d-flex justify-content-center mt-5 w-100 align-items-center text-danger'>Sorry!! Nothing to display</tr>
                                     }
                                </tbody>
                            </Table>

                        </Card>
                    </div>
                </Row>

            </div>
        </>
    )
}

export default HomeTable
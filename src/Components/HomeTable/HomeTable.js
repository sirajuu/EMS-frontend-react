import React from 'react'
import { Card, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeTable() {
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
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>@gmail</td>
                                        <td>Male</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    Active
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item >In Active</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            <img height={'40px'} width={'50px'} src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg" alt="Profile" />
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic1">
                                                    <i class='fa-solid fa-ellipsis-vertical fs-5'></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link to={'/Profile/:id'} className='text-decoration-none' >
                                                            <i className='fa-solid fa-eye text-success me-2'></i>
                                                            <span className=' text-dark'>View</span>
                                                        </Link>

                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <Link to={'/Edit/:id'} className='text-decoration-none'>
                                                            <i className='fa-solid fa-pen text-danger me-2'></i>
                                                            <span>Edit</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <div>
                                                            <i className='fa-solid fa-trash text-danger me-2 '></i>
                                                            <span className=' text-dark'>Delete</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
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
import React, { createContext, useState } from 'react'

export const addData = createContext()
export const updateData = createContext()
export const deleteData = createContext()

function ContexShare({ children }) {

  // register data
  const [useradd, setUserAdd] = useState("")
  // update data
  const [editdata, setEditdata] = useState("")
  //  delete data
  const [deletedata, setDeletedata] = useState("")
  return (
    <>
      <addData.Provider value={{ useradd, setUserAdd }}>
        <updateData.Provider value={{ editdata, setEditdata }}>
          <deleteData.Provider value={{deletedata,setDeletedata}}>
            {children}
          </deleteData.Provider>
        </updateData.Provider>

      </addData.Provider>
    </>
  )
}

export default ContexShare
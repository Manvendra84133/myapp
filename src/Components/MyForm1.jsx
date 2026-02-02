import React, { useState } from 'react'

const MyForm1 = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [fnameError, setFnameError] = useState("")
  const [lnameError, setLnameError] = useState("")

  const handleFname = (e) => {
    setFname(e.target.value)
  }

  const handleLname = (e) => {
    setLname(e.target.value)
  }

  const isValid = () => {
    let valid = true

    if (fname.length < 2) {
      setFnameError("First name should be at least 2 characters")
      valid = false
    } else {
      setFnameError("")
    }

    if (lname.length < 5) {
      setLnameError("Last name should be at least 5 characters")
      valid = false
    } else {
      setLnameError("")
    }

    return valid
  }

  const handleSubmit = () => {
    if (isValid()) {
      console.log("First name is", fname)
      console.log("Last name is", lname)
    } else {
      console.log("Form not submitted")
    }
  }

  return (
    <>
      <h1>Form</h1>

      <div>
        <label htmlFor='fname'>First Name :</label>
        <input type='text' id='fname' placeholder='Enter your first name' onChange={handleFname}/>
        {fnameError && <p>{fnameError}</p>}

        <label htmlFor='lname'>Last Name :</label>
        <input type='text' id='lname' placeholder='Enter your last name' onChange={handleLname}/>
        {lnameError && <p>{lnameError}</p>}

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default MyForm1
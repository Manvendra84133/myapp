import React, { useState } from 'react'

const Form = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [checked, setChecked] = useState(false)

  const [submitted, setSubmitted] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const [contactError, setContactError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleFname = (e) => {
    const value = e.target.value
    setFname(value)
  }

  const handleLname = (e) => {
    const value = e.target.value
    setLname(value)
  }

  const handleAddress = (e) => {
    const value = e.target.value
    setAddress(value)
  }

  const handleCity = (e) => {
    const value = e.target.value
    setCity(value)
  }

  const handleContact = (e) => {
    const value = e.target.value
    const contactRegex = /^[0-9]{10}$/
    setContact(value)
    setContactError(!contactRegex.test(value))
  }

  const handleEmail = (e) => {
    const value = e.target.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    setEmail(value)
    setEmailError(!emailRegex.test(value))
  }

  const handlePassword = (e) => {
    const value = e.target.value
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    setPassword(value)
    setPasswordError(!passwordRegex.test(value))
  }

  const handleCpassword = (e) => {
    const value = e.target.value
    setCpassword(value)
  }

  const handleCheckbox = (e) => {
    const value = e.target.checked
    setChecked(value)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setFormSuccess(false)

    if (fname && lname && address && city && contact && email && password && cpassword && !contactError && !emailError && !passwordError && password === cpassword && checked)
    {
      setFormSuccess(true)
    }
    else {
      console.log("Something is wrong");  
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>

      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input className="form-control" onChange={handleFname} />
        {submitted && !fname && <div className="text-danger mt-1"><b>First name required</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input className="form-control" onChange={handleLname} />
        {submitted && !lname && <div className="text-danger mt-1"><b>Last name required</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input className="form-control" onChange={handleAddress} />
        {submitted && !address && <div className="text-danger mt-1"><b>Address required</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <select className="form-control" onChange={handleCity}>
          <option value="">Select city</option>
          <option>Ajmer</option>
          <option>Jaipur</option>
          <option>Delhi</option>
          <option>Mumbai</option>
        </select>
        {submitted && !city && <div className="text-danger mt-1"><b>City required</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" onChange={handlePassword} />
        {submitted && !password && <div className="text-danger mt-1"><b>Password required</b></div>}
        {submitted && passwordError && <div className="text-danger mt-1"><b>Invalid password</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input type="password" className="form-control" onChange={handleCpassword} />
        {submitted && !cpassword && <div className="text-danger mt-1"><b>Confirm password required</b></div>}
        {submitted && password && cpassword && password !== cpassword && <div className="text-danger mt-1"><b>Passwords do not match</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Contact</label>
        <input className="form-control" onChange={handleContact} />
        {submitted && !contact && <div className="text-danger mt-1"><b>Contact required</b></div>}
        {submitted && contactError && <div className="text-danger mt-1"><b>Enter 10 digit number</b></div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" onChange={handleEmail} />
        {submitted && !email && <div className="text-danger mt-1"><b>Email required</b></div>}
        {submitted && emailError && <div className="text-danger mt-1"><b>Invalid email</b></div>}
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" onChange={handleCheckbox} />
        <label className="form-check-label">Accept Terms & Conditions</label>
        {submitted && !checked && <div className="text-danger mt-1"><b>Please accept terms</b></div>}
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

      {formSuccess && (<div className="mt-3 text-success"><b>Submitted Successfully</b></div>
      )}
    </div>
  )
}

export default Form
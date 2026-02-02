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

    if (fname.length > 2 && lname.length > 2 && address.length > 50 && !contactError && !emailError && !passwordError && password === cpassword && checked)
    {
      console.log("Form submitted successfully")
    } else {
      console.log("There is a mistake")
    }
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">

        <input className="form-control mb-2" placeholder="First Name" onChange={handleFname} />
        {submitted && fname.length < 3 && <div className="text-danger">Min 3 characters</div>}

        <input className="form-control mb-2" placeholder="Last Name" onChange={handleLname} />
        {submitted && lname.length < 3 && <div className="text-danger">Min 3 characters</div>}

        <input className="form-control mb-2" placeholder="Address" onChange={handleAddress} />
        {submitted && address.length < 50 && <div className="text-danger">Min 50 characters</div>}

        <select className="form-select mb-2" onChange={handleCity}>
          <option value="">Select City</option>
          <option>Ajmer</option>
          <option>Jaipur</option>
          <option>Delhi</option>
          <option>Mumbai</option>
        </select>

        <input type="password" className="form-control mb-2" placeholder="Password" onChange={handlePassword} />
        {submitted && passwordError && <div className="text-danger">Invalid password</div>}

        <input type="password" className="form-control mb-2" placeholder="Confirm Password" onChange={handleCpassword} />
        {submitted && password !== cpassword && <div className="text-danger">Passwords do not match</div>}

        <input className="form-control mb-2" placeholder="Contact" onChange={handleContact} />
        {submitted && contactError && <div className="text-danger">10 digits required</div>}

        <input type="email" className="form-control mb-2" placeholder="Email" onChange={handleEmail} />
        {submitted && emailError && <div className="text-danger">Invalid email</div>}

        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" onChange={handleCheckbox} />
          <label className="form-check-label">Accept Terms</label>
        </div>
        {submitted && !checked && <div className="text-danger">Accept terms</div>}

        <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>

      </div>
    </div>
  )
}

export default Form
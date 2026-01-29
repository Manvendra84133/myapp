import React, { useState } from 'react'

const MyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [nameerror, setNameError] = useState("")
  const [emailerror, setEmailError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
    setNameError("")
    setSubmitted(false)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError("")
    setSubmitted(false)
  }

  const handleSubmit = () => {
    setNameError("")
    setEmailError("")
    setSubmitted(false)

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (name === "") {
      setNameError("Warning: Name is required")
      return
    }

    if (email === "") {
      setEmailError("Warning: Email is required")
      return
    }

    if (!regex.test(email)) {
      setEmailError("Warning: Enter a valid email")
      return
    }

    setSubmitted(true)
    setName("")
    setEmail("")
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">MyForm</h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={handleName}/>
        {nameerror && <div className="text-warning mt-1"><b>{nameerror}</b></div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your mail id" value={email} onChange={handleEmail}/>
        {emailerror && <div className="text-warning mt-1"><b>{emailerror}</b></div>}
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

      {submitted && <div className="mt-3 text-success"><b>Submitted Successfully</b></div>}
    </div>
  )
}

export default MyForm
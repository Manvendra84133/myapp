import React, { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleName(e) {
    setName(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value)
  }

  function handleSubmit() {
    setSubmitted(true);

    if (name.length > 2 && email.length > 6 && password.length > 4 && password === confirmPassword) {
      console.log(name, email, password);
    }
    else {
      console.log("Validation error");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: "url(/images/carousel_img7.jpg)",backgroundSize: "cover",backgroundPosition: "center"}}>
      <div className="bg-dark bg-opacity-75 p-4 rounded-4 text-center shadow" style={{ width: "380px" }}>
        <h3 className="text-white mb-4">Sign Up</h3>

        <input type="text" placeholder="Name" className="form-control mb-2 bg-transparent text-white" value={name} onChange={handleName}/>
        {submitted && name.length < 3 && (<p className="text-danger small">Name must be at least 3 characters</p>)}

        <input type="email" placeholder="E-mail" className="form-control mb-2 bg-transparent text-white" value={email} onChange={handleEmail}/>
        {submitted && email.length < 6 && (<p className="text-danger small">Enter a valid email</p>)}

        <input type="password" placeholder="Password" className="form-control mb-2 bg-transparent text-white" value={password} onChange={handlePassword}/>
        {submitted && password.length < 5 && (<p className="text-danger small">Password must be at least 5 characters</p>)}

        <input type="password" placeholder="Confirm Password" className="form-control mb-2 bg-transparent text-white" value={confirmPassword} onChange={handleConfirmPassword}/>
        {submitted && password !== confirmPassword && (<p className="text-danger small">Passwords do not match</p>)}

        <button className="btn btn-light w-100 mb-3 mt-2" onClick={handleSubmit}>Sign Up</button>

        <p className="text-white mb-0">Already have an Account?<span className="text-info ms-1" style={{ cursor: "pointer" }}>Login</span></p>
      </div>
    </div>
  );
}

export default Registration
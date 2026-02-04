import React, { useState } from "react";

function AdvanceFormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState({});

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleCpassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const isValid = () => {
    let valid = true;

    let LocalError = {
      name: {
        errorStatus: false,
        errorDetail: ""
      },
      
      email: {
        errorStatus: false,
        errorDetail: ""
      },
      
      password: {
        errorStatus: false,
        errorDetail: ""
      },
      
      confirmPassword: {
        errorStatus: false,
        errorDetail: ""
      },
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/;

    if (name.length < 2) {
      LocalError.name.errorStatus = true
      LocalError.name.errorDetail ="Name should be at least 2 characters long"
      valid = false
    }

    if (email.length < 7) {
      LocalError.email.errorStatus = true
      LocalError.email.errorDetail ="Email should be at least 7 characters long"
      valid = false
    } else if (!emailRegex.test(email)) {
      LocalError.email.errorStatus = true
      LocalError.email.errorDetail = "Email is not in valid format"
      valid = false
    }

    if (password.length < 5) {
      LocalError.password.errorStatus = true
      LocalError.password.errorDetail ="Password should be at least 5 characters long"
      valid = false
    } else if (!passwordRegex.test(password)) {
      LocalError.password.errorStatus = true
      LocalError.password.errorDetail ="Password must contain letters and numbers"
      valid = false
    }

    if (confirmPassword !== password) {
      LocalError.confirmPassword.errorStatus = true
      LocalError.confirmPassword.errorDetail ="Confirm password does not match"
      valid = false
    }

    setError(LocalError)
    return valid
  }

  const handleSubmit = () => {
    setIsSubmitted(true)

    if (isValid()) {
      console.log("Form Submitted")
      console.log("Name is", name)
      console.log("Email is", email)
      console.log("Password is", password);
    }
    else {
      console.log("Form Validation Failed");
    }
  }

  return (
    <>
      <h1 className="alert alert-dark text-center">Advance Form Validation</h1>

      <div className="container-fluid border border-1 border-light w-100 my-4">
        <div>
      <input type="text" placeholder="Name" onChange={handleName} />
          {isSubmitted && error?.name.errorStatus && <p>{error.name.errorDetail}</p>}
          </div>

      <div>
        <input type="text" placeholder="Email" onChange={handleEmail} />
          {isSubmitted && error?.email.errorStatus && <p>{error.email.errorDetail}</p>}
          </div>

      <div>
        <input type="password" placeholder="Password" onChange={handlePassword} />
          {isSubmitted && error?.password.errorStatus && <p>{error.password.errorDetail}</p>}
          </div>

      <div>
        <input type="password" placeholder="Confirm Password" onChange={handleCpassword} />
          {isSubmitted && error?.confirmPassword.errorStatus && (<p>{error.confirmPassword.errorDetail}</p>)}
          </div>

        <button className="btn btn-dark btn-sm d-block m-auto my-5 px-5" onClick={handleSubmit}>Submit</button>
        </div>
    </>
  );
}

export default AdvanceFormValidation;
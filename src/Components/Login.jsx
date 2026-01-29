import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit() {
    setSubmitted(true);

    if (email.length > 6 && password.length > 4) {
      console.log(email);
      console.log(password);
    } else {
      console.log("There is a mistake");
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: "url(/images/carousel_img7.jpg)",backgroundSize: "cover",backgroundPosition: "center"}}>
        <div className="bg-dark bg-opacity-75 p-4 rounded-4 text-center shadow" style={{ width: "350px" }}>
          <h3 className="text-white mb-4">Login</h3>

          <input type="email" placeholder="E-mail" value={email} onChange={handleEmail} className="form-control mb-2 bg-transparent text-white"/>
          {submitted && email.length < 6 && (<p className="text-danger small">Email must be more than 6 characters</p>)}

          <input type="password" placeholder="Password" value={password} onChange={handlePassword} className="form-control mb-2 bg-transparent text-white"/>
          {submitted && password.length < 4 && (<p className="text-danger small">Password must be more than 4 characters</p>)}

          <button className="btn btn-light w-100 mb-3 mt-2" onClick={handleSubmit}>Login</button>

          <p className="text-white mb-0">Don't have an Account?<span className="text-info ms-1" style={{ cursor: "pointer" }}>Sign Up</span></p>
        </div>
      </div>
    </>
  );
}

export default Login;
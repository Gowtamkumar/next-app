import React from 'react'

export default function Login() {
  return (
    <div className='container d-flex justify-content-center align-items-center bg-light' style={{ height: "80vh"}}>
      
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input " id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

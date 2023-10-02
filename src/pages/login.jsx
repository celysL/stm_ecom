import React from "react"
import {Link} from 'react-router-dom'

function Login(){
    return(
        <div className="form-container">
            <div className="form-box">
                <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                    <div className="bg-white p-3 rounded w-25">
                        <h2>Login</h2>
                        <form>
                            
                            <div className="mb-3">
                                <label htmlFor="email"><strong>Email</strong></label>
                                <input type="email" placeholder="Enter your email" name="email" className="form-control rounded-0" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password"><strong>Password</strong></label>
                                <input type="password" placeholder="Enter your password" name="password" className="form-control rounded-0" />
                            </div>

                            <button type="submit" className="btn btn-success w-100 rounded-0" >Log In</button>
                            <p>You are agreeing to our terms and policies</p>
                            <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >Create Account</Link>

                        </form>

                    </div>

                </div>
            </div> {/* end form box */}
        </div> //form container end div
    )
}

export default Login  
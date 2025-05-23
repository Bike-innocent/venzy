import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      







    {/* <!-- Start Account Login Area --> */}
    <div class="account-login section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                    <form class="card login-form" method="post">
                        <div class="card-body">
                            <div class="title">
                                <h3>Login Now</h3>
                            </div>
                           
                            
                            <div class="form-group input-group">
                                <label for="reg-fn">Email</label>
                                <input class="form-control" type="email" id="reg-email" required/>
                            </div>
                            <div class="form-group input-group">
                                <label for="reg-fn">Password</label>
                                <input class="form-control" type="password" id="reg-pass" required/>
                            </div>
                            <div class="d-flex flex-wrap justify-content-between bottom-content">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input width-auto" id="exampleCheck1"/>
                                    <label class="form-check-label">Remember me</label>
                                </div>
                                <a class="lost-pass" href="account-password-recovery.html">Forgot password?</a>
                            </div>
                            <div class="button">
                                <button class="btn" type="submit">Login</button>
                            </div>
                            <p class="outer-link">Don't have an account? <Link to="/register">Register here </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* {/* <!-- End Account Login Area --> */} 












    </>
  )
}

export default Login

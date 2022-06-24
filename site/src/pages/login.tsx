import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../layouts/layout";
import { AuthAction } from "../actions/auth.action";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const [ username, setUsername ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const router = useRouter();

  const authAction = new AuthAction();

  const handleLogin = async () => {
    const loginResponse = await authAction.login({ username, password });
    if (loginResponse?._id) {
      router.push("/");
    }
  };
  
  return (
    <Layout>
      <div className="login-page">
        <div className="d-lg-flex half">
          <div className="bg order-1 order-md-2" style={{ backgroundImage: "url(https://pbs.twimg.com/media/FBb5qQrVgAAWXxJ.jpg)" }}></div>
          <div className="contents order-2 order-md-1">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7">
                  <div className="mb-4">
                    <p className="text-[30px]">Sign In</p>
                    <p className="mb-4">Login with username and password</p>
                  </div>
                  <form action="#" method="post">
                    <div className="form-group first">
                      <label htmlFor="username">Username</label>
                      <input type="text" className="form-control" id="username" onChange={e => setUsername(e.target.value)}/>

                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)}/>

                    </div>

                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                        <input type="checkbox" checked={true} />
                        <div className="control__indicator"></div>
                      </label>
                      <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                    </div>
                    <button className="px-[10px] py-[5px] btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();
                      handleLogin();
                    }}>
                      <p>Login</p>
                    </button>

                    <span className="d-block text-center my-4 text-muted">&mdash; or &mdash;</span>

                    <div className="social-login">
                      <a href="#" className="facebook btn d-flex justify-content-center align-items-center">
                        <span className="icon-facebook mr-3"></span> Login with Facebook
                      </a>
                      <a href="#" className="twitter btn d-flex justify-content-center align-items-center">
                        <span className="icon-twitter mr-3"></span> Login with  Twitter
                      </a>
                      <a href="#" className="google btn d-flex justify-content-center align-items-center">
                        <span className="icon-google mr-3"></span> Login with  Google
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default LoginPage; 
import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../layouts/layout";
import { AuthAction } from "../actions/auth.action";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Welcome back!</h3>
                      <form onSubmit={() => handleLogin()}>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                          <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberPasswordCheck"
                          />
                          <label className="form-check-label" htmlFor="rememberPasswordCheck">
                            Remember password
                          </label>
                        </div>

                        <div className="d-grid">
                          <button className="ui-button ui-widget ui-corner-all text-uppercase fw-bold mb-2 bg-black text-white hover:bg-[blue] hover:text-black btn-login"
                            type="submit"
                            onClick={e => {
                              e.preventDefault();
                              handleLogin();
                            }}>
                            Sign in
                          </button>
                          <p className="text-center">
                            or
                          </p>
                          <button
                            className="ui-button ui-widget ui-corner-all text-uppercase fw-bold mb-2 bg-[#0082ff] text-white hover:bg-[blue] hover:text-black btn-login"
                            type="submit"
                            onClick={e => {
                              e.preventDefault();
                              window.location.href = "/sign-up";
                            }}>
                            Sign up
                          </button>
                          <div className="text-center">
                            <a className="small" href="#">Forgot password?</a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
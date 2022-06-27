import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../layouts/layout";
import { AuthAction } from "../actions/auth.action";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SignUpPage: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const authAction = new AuthAction();

  const handleSignup = async () => {
    const loginResponse = await authAction.signUp({
      username,
      password,
      name,
      email,
    });
    if (loginResponse?._id) {
      toast.success("Sign up successfully");
      router.push("/login");
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
                      <h3 className="login-heading mb-4">Welcome our shop, have a good experience!</h3>
                      <form onSubmit={() => handleSignup()}>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Enter your name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                          <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Enter your username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                          <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                          <label htmlFor="floatingInput">Email</label>
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
                        <div className="d-grid">
                          <button
                            className="text-uppercase fw-bold mb-2 bg-black text-white hover:bg-[blue] hover:text-black btn-login"
                            type="submit"
                            onClick={e => {
                              e.preventDefault();
                              handleSignup();
                            }}>
                            Sign up
                          </button>
                          <p className="text-center">
                            or
                          </p>
                          <div className="text-center">
                            <a className="small" href="/login">Go back to login?</a>
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

export default SignUpPage; 
import React from "react";
import Layout from "../layouts/layout";
import { NextPage } from "next";
import { useApp } from "../hooks/app.hook";
import { AuthAction } from "../actions/auth.action";

const ProfilePage: NextPage = () => {
  const { user } = useApp(); 
  const authAction = new AuthAction(); 

  const handleLogout = () => {
    authAction.logout();
  }

  return (
    <Layout>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="container">
            <div className="md:w-[700px] mx-auto">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25 flex justify-center">
                        <img 
                          src="https://img.icons8.com/bubbles/100/000000/user.png" 
                          className="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-600">{user?.name}</h6>
                      <p>Customer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user?.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Name</p>
                          <h6 className="text-muted f-w-400">{user?.name}</h6>
                        </div>
                      </div>
                      <div className="row mt-[20px]">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Username</p>
                          <h6 className="text-muted f-w-400">{user?.username}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li><button onClick={handleLogout}><i className="bx bx-log-out" aria-hidden="true"></i></button></li>
                      </ul>
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
}

export default ProfilePage;
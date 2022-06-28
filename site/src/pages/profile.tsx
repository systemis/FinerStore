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
      <div className="page-content page-container profile-page" id="page-content">
        <div className="container d-flex md:w-[700px] w-[350px]">
          <div className="card w-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div className="mb-[25px] mx-[auto] inline-flex">
                    <img 
                      src={"https://source.boringavatars.com/beam/100"} 
                      className="rounded-[5px]" 
                      alt="User-Profile-Image" />
                  </div>
                  <h6 className="fontn-bold">{user?.name}</h6>
                  <p>{user?.username}</p>
                  <p className="cursor-pointer" onClick={() => authAction.logout()}><i className='bx bx-log-in-circle'></i></p>
                </div>
              </div>
              <div className="col-sm-8 bg-white border md:border-[none]">
                <div className="card-block">
                  <h6 className="mb-[20px] pb-[20px] border-bottom f-w-600">Information</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="mb-[20px] font-bold">Email</p>
                      <h6 className="text-muted font-[500]">{user?.email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-[10px] font-bold">Name</p>
                      <h6 className="text-muted font-bold">{user?.name}</h6>
                    </div>
                  </div>
                  <h6 className="mb-[20px] mt-[40px] pb-[5px] border-bottom font-bold">Information</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="mb-[10px] font-[600]">Username</p>
                      <h6 className="text-muted font-[400]">{user?.username}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-[10px] font-[600]">Role</p>
                      <h6 className="text-muted font-[400]">{user?.role}</h6>
                    </div>
                  </div>
                  <ul className="social-link list-unstyled m-t-40 m-b-10 flex mt-[20px]">
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="bx bxl-facebook-circle text-[#003dffad] text-[25px]" aria-hidden="true"></i></a></li>
                    <li className="ml-[10px]"><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="bx bxl-twitter text-[#0093ff] text-[25px]" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
}

export default ProfilePage;
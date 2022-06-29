import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../layouts/layout";
import { toast } from "react-toastify";

const ContactPage: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessageContact = () => {
    if (!name || !email || !subject || !message) return;
    toast.success("Send message successfully");
    window.location.reload();
  }

  return (
    <Layout>
      <div className="contact-page contact-bg">
        <section className="md:w-[750px] mx-auto px-[20px] py-[20px] border bg-white w-[400px]">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters mb-5">
                  <div className="col-12">
                    <div className="contact-wrap w-100 p-md-5">
                      <h3 className="mb-4 text-[30px] font-bold">Contact Us</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <form id="contactForm" name="contactForm" className="contactForm" onSubmit={() => handleSendMessageContact()}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group mt-[20px]">
                              <label className="label" htmlFor="name">Full Name</label>
                              <input
                                type="text"
                                className="w-full py-[20px] border-[0px] bg-[#80808036] outline-0" name="name" id="name" placeholder="Name"
                                onChange={e => setName(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mt-[20px]">
                              <label className="label" htmlFor="email">Email Address</label>
                              <input type="email" className="w-full py-[20px] border-[0px] bg-[#80808036] outline-0" name="email" id="email" placeholder="Email"
                                onChange={e => setEmail(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-12 ">
                            <div className="form-group mt-[20px]">
                              <label className="label" htmlFor="subject">Subject</label>
                              <input type="text" className="w-full py-[20px] border-[0px] bg-[#80808036] outline-0" name="subject" id="subject" placeholder="Subject"
                                onChange={e => setSubject(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mt-[20px]">
                              <label className="label" htmlFor="#">Message</label>ß
                              <textarea name="message" className="w-full py-[20px] border-[0px] bg-[#80808036] outline-0 px-[20px]" id="message" cols={30} rows={4} placeholder="Message"
                                onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <button className="btn px-[20px] py-[10px] bg-black text-white text-center outline-0" onClick={e => {
                                e.preventDefault();
                                handleSendMessageContact();
                              }}>
                                Send messsage
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <i className='bx bx-current-location'></i>
                      </div>
                      <div className="text">
                        <p><span>Address:</span> Da Nang city, Viet Nam</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <i className='bx bxs-phone' ></i>
                      </div>
                      <div className="text">
                        <p><span>Phone:</span> <a href="tel://1234567920">+ 84905 291 299</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <i className='bx bxs-envelope' ></i>
                      </div>
                      <div className="text">
                        <p><span>Email:</span> <a href="mailto:contact@finner.com">contact@finner.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <i className='bx bx-globe' ></i>
                      </div>
                      <div className="text">
                        <p><span>Website</span> <a href="#">finner.herokuapp.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ContactPage;
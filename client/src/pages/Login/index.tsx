import React from "react";
import "./login.css";
import { Tag } from "../../components/common/Tag";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import google from "../../assets/icon/google.png";
import apple from "../../assets/icon/Apple.png";
import Sidebar from "../../components/modules/sidebarLogin";

const Login = () => {
  const services = [
    {
      icon: google,
      text: "Google",
    },
    {
      icon: apple,
      text: "Apple ID",
    },
  ];

  return (
    <div className="wrapp flex flex-row">
      <div className="sidebar mobile:hidden tablet:block ">
        <Sidebar title="Plan includes" />
      </div>
      <div className="content mobile:flex-1">
        <h2 className="text-start text-6xl font-black">Sign Up</h2>

        <div className="socialLabel text-start my-10">
          <b>Sign up with Open account</b>
        </div>

        <div className="social flex gap-4 flex-row">
          {services.map((service, index) => (
            <Tag key={index} icon={service.icon} text={service.text} />
          ))}
        </div>

        <hr className="my-10 h-2" />

        <div className="anotherWay-signUp text-start my-6">
          <b className="">Or continue with email address</b>
        </div>

        <form action="" className="form-signup flex gap-4 flex-col">
          <Input type="email" className="w-100" placeholder="Your email" />
          <Button
            className="w-100"
            variant="large"
            kind="primary"
            text="Continue"
          />
        </form>

        <div className="recapcha mt-10 text-start">
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

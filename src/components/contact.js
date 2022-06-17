import React from "react";
import * as AiIcons from "react-icons/ai";
import '../App.css'
const Contact = () => {
  return (
    <>
      <h1 className="contactH">Contact</h1>
      <div className="info-box">
        <p>
          <a href="mailto: kevmunar@moondoc.me" target="_blank">
          
            <AiIcons.AiOutlineMail size={25}/> kevmunar@moondoc.me
          </a>
        </p>
        <p>
          <a href="https://github.com/yomoon93" target="_blank">
            <AiIcons.AiFillGithub size={25}/> GitHub:Yomoon93
          </a>
        </p>
        <p>
        <a href="https://www.linkedin.com/in/kevinmunar/" target="_blank">
        <AiIcons.AiFillLinkedin size={25}/> Linkedin
          </a>
        </p>
      </div>
    </>
  );
};
export default Contact;

import React from "react";
import "./EmailForm.css";
const EmailForm = () => {
  return (
    <div className="form">
      <form action="">
        <ul>
          <li>
            <input type="text" placeholder="Email address" />
          </li>
          <li>
            <button>Get Started ></button>
          </li>
        </ul>
      </form>
    </div>
  );
};
export default EmailForm;

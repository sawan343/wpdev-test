import React, { useState, useEffect } from "react";
import "../../styles/leftContainer.scss";
import TextField from "../InputFields/TextField";
import DropDownField from "../InputFields/DropDownField";
import Button from "../Buttons/Button";
import locale from "../../Constants/textConstants";

const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

const validatepassword = (password) => {
  if (password && password.length >= 8) {
    return true;
  }
  return false;
};

const initialFormState = {
  username: "",
  email: { validate: false, value: "" },
  password: { validate: false, value: "" },
  userType: "",
};
export default function LeftContainer(props) {
  const [passwordVisiblityStatus, showPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormState);

  const { className } = props;
  const selectData = ["developer", "manager", "Quality Analyst"];

  const isButtonActive = () => {
    let active = true;
    for (let key in formData) {
      if (formData[key].hasOwnProperty("validate")) {
        if (!formData[key].validate) {
          active = false;
        }
      } else {
        if (formData[key] === "") {
          active = false;
        }
      }
    }
    return active;
  };

  const onChange = (e) => {
    e.persist();
    return updateFormData((formData) => {
      if (formData[e.target.name].hasOwnProperty("validate")) {
        if (e.target.name === "email") {
          return {
            ...formData,
            [e.target.name]: {
              value: e.target.value,
              validate: ValidateEmail(e.target.value),
            },
          };
        }

        if (e.target.name === "password") {
          return {
            ...formData,
            [e.target.name]: {
              value: e.target.value,
              validate: validatepassword(e.target.value),
            },
          };
        }
      }
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const changePasswordVisibilityStatus = () => {
    return showPassword((passwordVisiblityStatus) => !passwordVisiblityStatus);
  };
  return (
    <section className={className}>
      <section className={"formContainer"}>
        <h2> {locale.letsSetUp}</h2>
        <p className="sign-text">
          {locale.alreadyAccount}
          <span>{locale.signIn}</span>
        </p>
        <div className="text-field-holder">
          <TextField
            placeholder={locale.yourName}
            type="text"
            name="username"
            onChange={onChange}
            value={formData.username}
            aria-required="true"
            id="username"
          />
        </div>
        <div className="text-field-holder">
          <TextField
            placeholder={locale.emailText}
            type="email"
            name="email"
            onChange={onChange}
            value={formData.email.value}
            validate={formData.email.validate}
            errorText={locale.emailError}
            aria-required="true"
            id="email"
          />
        </div>
        <div className="text-field-holder">
          <DropDownField
            options={selectData}
            name="userType"
            onChange={onChange}
            value={formData.userType}
            aria-required="true"
            id="dropdown"
          />
        </div>
        <div className="text-field-holder">
          <TextField
            onChange={onChange}
            placeholder={locale.password}
            isPasswordField={true}
            type={passwordVisiblityStatus ? "text" : "password"}
            isShowPassword={passwordVisiblityStatus}
            showPassword={changePasswordVisibilityStatus}
            name="password"
            validate={formData.password.validate}
            value={formData.password.value}
            info={locale.passwordError}
            aria-required="true"
            id="password"
          />
        </div>
        <div className="text-field-holder">
          <Button isActive={isButtonActive()} />
        </div>
      </section>
    </section>
  );
}

import React, { Fragment } from "react";
import "../../styles/input.scss";

const TextField = (props) => {
  const { isPasswordField,errorText,info, showPassword, isShowPassword, ...restProps } = props;
  const isError = (restProps.type === "email" || restProps.type==="password" ) && restProps.value !== "" && !restProps.validate;
  let labelClasses = isError ?  "label-input  errorTextColor": "label-input";
  const inputClass = isError ? 'errorBorder' :  "";

   return (
    <Fragment>
      <input {...restProps} onChange={props.onChange} className ={inputClass} />
      <label className={labelClasses }>{restProps.placeholder}</label>
      {isPasswordField && (
        <span onClick={showPassword}>
          {isShowPassword ? (
            <i className="fa fa-fw fa-eye-slash"></i>
          ) : (
            <i className="fa fa-fw fa-eye"></i>
          )}
        </span>
      )}
      {isError && (
          <p className={"errorText errorTextColor"}>
            {errorText || info}
          </p>
        )}
      {(info && !isError) && (
          <p className={"errorText"}>
            {info}
          </p>
        )}
    </Fragment>
  );
};

export default TextField;

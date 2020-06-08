import React from "react";
import { LocaleConsumer } from "../../Constants/textConstants";

export const GetText = (props) => {
  return (
    <LocaleConsumer>
      {(text) => {
        return text[props.textKey];
      }}
    </LocaleConsumer>
  );
};

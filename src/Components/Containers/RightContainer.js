import React, { useState, useEffect } from "react";
import "../../styles/rightConainer.scss";
import locale from "../../Constants/textConstants";

export default function RightContainer(props) {
  const { className } = props;
  return (
    <section className={className}>
      <div className="content">
        <h2>{locale.leftHeader}</h2>
        <p>{locale.leftText}</p>
      </div>
    </section>
  );
}

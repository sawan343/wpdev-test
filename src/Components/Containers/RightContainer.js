import React, { useState, useEffect } from "react";
import "../../styles/rightConainer.scss";

export default function RightContainer(props) {
  const { className } = props;
  return (
    <section className={className}>
      <div className="content">
        <h2>Dummy Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

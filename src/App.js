import React from "react";
import "./styles/app.scss";
import { LeftContainer, RightContainer } from "./Components/Containers";
function App() {
  return (
    <div className="row">
        <LeftContainer className={"columnLeft"} />
        <RightContainer className={"columnRight"} />
    </div>
  );
}

export default App;

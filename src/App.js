import React from "react";
import "./styles/app.scss";
import { LeftContainer, RightContainer } from "./Components/Containers";
import locale, { LocaleProvider } from "./Constants/textConstants";
function App() {
  return (
    <div className="row">
      <LocaleProvider value={locale}>
        <LeftContainer className={"columnLeft"} />
        <RightContainer className={"columnRight"} />
      </LocaleProvider>
    </div>
  );
}

export default App;

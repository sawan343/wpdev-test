import React from "react";

export const locale = {
  letsSetUp: "Let’s set up your account",
};
export default locale;

const LocaleContext = React.createContext();
const LocaleProvider = LocaleContext.Provider;
const LocaleConsumer = LocaleContext.Consumer;
export { LocaleProvider, LocaleConsumer };

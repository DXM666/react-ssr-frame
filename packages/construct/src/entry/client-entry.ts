import * as React from "react";
import * as ReactDOM from "react-dom";

const clientBootstrap = (View: React.FC) => {
  ReactDOM.hydrate(React.createElement(View), document.getElementById("root"));
};

export { clientBootstrap };

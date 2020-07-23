import React from "react";
import Routes from "./routes";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "./styles/settings/colors";
import Fonts from "./styles/settings/fonts";
import Gaps from "./styles/settings/gaps";
import Container from "./styles/generic/container";
import Elements from "./styles/base/elements";

function App() {
  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Container />
      <Elements />

      <Routes />
    </>
  );
}

export default App;

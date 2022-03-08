import React from "react";
import "./App.css";
import OverlayProps from "./types";
import { Container, Overlay, Content } from "./styles";

const App: React.FC<OverlayProps> = () => {
  return (
    <Container>
      <Overlay />
      <Content></Content>
    </Container>
  );
}

export default App;
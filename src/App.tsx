import React from "react";
import "./App.css";
import OverlayProps from "./types";
import {
  Container,
  Overlay,
  Content,
  Header,
  Title,
  CloseButton,
  CloseButtonSvg,
} from "./styles";
import { Close } from "./assets";

const App: React.FC<OverlayProps> = ({
  title,
  closeOnOverlayClick,
  isOpen,
  onClose,
}) => {
  return (
    <Container>
      <Overlay isHovered={closeOnOverlayClick} />
      <Content>
        <Header>
          {title && <Title>{title}</Title>}
          <CloseButton
            onClick={() =>
              console.log("Sair", closeOnOverlayClick, isOpen, onClose)
            }
          >
            <CloseButtonSvg src={Close} alt="Close dialog button" />
          </CloseButton>
        </Header>
      </Content>
    </Container>
  );
};

export default App;

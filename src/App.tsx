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
  Description,
  DescriptionText,
} from "./styles";
import { Close } from "./assets";

const App: React.FC<OverlayProps> = ({
  title,
  closeOnOverlayClick,
  isOpen,
  onClose,
  children,
}) => {
  if (isOpen) {
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
          {children && (
            <Description>
              <DescriptionText>{children}</DescriptionText>
            </Description>
          )}
        </Content>
      </Container>
    );
  }
  return null;
};

export default App;

import React, { useCallback, useEffect } from "react";
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
  const closeModalOnEscButton = useCallback(
    (event: KeyboardEvent) => {
      event.key === "Escape" && onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModalOnEscButton);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscButton);
    };
  }, [closeModalOnEscButton]);

  if (isOpen) {
    return (
      <Container data-testid="react-dialogue-component-test-id">
        <Overlay
          data-testid="react-dialogue-component-overlay-test-id"
          isHovered={closeOnOverlayClick}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
        <Content data-testid="react-dialogue-component-content-test-id">
          <Header>
            {title && (
              <Title data-testid="react-dialogue-component-title-test-id">
                {title}
              </Title>
            )}
            <CloseButton
              onClick={onClose}
              data-testid="react-dialogue-component-close-button-test-id"
            >
              <CloseButtonSvg src={Close} alt="Close dialog button" />
            </CloseButton>
          </Header>
          {children && (
            <Description>
              <DescriptionText data-testid="react-dialogue-component-description-test-id">
                {children}
              </DescriptionText>
            </Description>
          )}
        </Content>
      </Container>
    );
  }
  return null;
};

export default App;

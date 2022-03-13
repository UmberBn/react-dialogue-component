import { useEffect, FC } from "react";
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
import { Close } from "../../assets";

const Dialogue: FC<OverlayProps> = ({
  title,
  closeOnOverlayClick,
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    const closeModalOnEscButton = (event: KeyboardEvent) => {
      event.key === "Escape" && onClose();
    };
    document.addEventListener("keydown", closeModalOnEscButton);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscButton);
    };
  }, [onClose]);

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
            {title ? (
              <Title data-testid="react-dialogue-component-title-test-id">
                {title}
              </Title>
            ) : (
              <span></span>
            )}
            <CloseButton
              onClick={onClose}
              data-testid="react-dialogue-component-close-button-test-id"
            >
              <CloseButtonSvg src={Close} alt="Close dialog button" />
            </CloseButton>
          </Header>
          {children && (
            <Description data-testid="react-dialogue-component-description-test-id">
              {typeof children === "string" ? (
                <DescriptionText>{children}</DescriptionText>
              ) : (
                children
              )}
            </Description>
          )}
        </Content>
      </Container>
    );
  }
  return null;
};

export default Dialogue;

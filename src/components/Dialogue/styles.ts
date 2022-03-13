import styled from "styled-components";

type OverlayProps = {
  isHovered: boolean;
};

const OverlayHeigth = 82;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 999;
  left: 0;
  top: 0;
`;

export const Overlay = styled.div<OverlayProps>`
  height: 100%;
  width: 100%;
  background-color: #000000;
  min-height: ${OverlayHeigth}px;
  opacity: 0.8;
  cursor: ${({ isHovered }) => (isHovered ? "pointer" : "auto")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 32px;
  height: fit-content;
  max-height: calc(100vh - ${OverlayHeigth}px);
  min-height: 64px;
  background-color: #ffffff;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 1.375rem;
  margin: 0;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 9px 25px 0px 25px;
`;

export const CloseButtonSvg = styled.img``;

export const Description = styled.div`
  padding-bottom: 32px;
  overflow: auto;
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  margin: 0;
`;

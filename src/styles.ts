import styled from "styled-components";

type OverlayProps = {
  isHovered: boolean;
};

const OverlayHeigth = 82;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-wrap: nowrap;
`;

export const Overlay = styled.div<OverlayProps>`
  height: 100%;
  width: 100%;
  background-color: #000000;
  min-width: ${OverlayHeigth}px;
  opacity: 0.8;
  cursor: ${({ isHovered }) => (isHovered ? "pointer" : "auto")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
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
  background-color: transparent;
  border: none;
  padding: 9px 25px 0px 25px;
`;

export const CloseButtonSvg = styled.img``;

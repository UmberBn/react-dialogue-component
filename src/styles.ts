import styled from "styled-components";

const OverlayHeigth = 82;

export const Container = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #000000;
  min-width: ${OverlayHeigth}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - ${OverlayHeigth}px);
  width: 100vw;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
`;

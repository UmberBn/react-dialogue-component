import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
/**
 * @jest-environment jsdom
 */
const DIALOGUE_TESTID = "react-dialogue-component-test-id";
const OVERLAY_TESTID = "react-dialogue-component-overlay-test-id";
const CONTENT_TESTID = "react-dialogue-component-content-test-id";
const CLOSE_BUTTON_TESTID = "react-dialogue-component-close-button-test-id";
const TITLE_TESTID = "react-dialogue-component-title-test-id";
const DESCRIPTION_TESTID = "react-dialogue-component-description-test-id";
const DEFAULT_CALLBACK = jest.fn(() => {
  return "Close Dialog";
});
afterEach(jest.resetAllMocks);
describe("Tests the dialogue component behavior when receive differents isOpen prop value", () => {
  it("displayed when passed the isOpen prop as true", () => {
    render(<App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick />);
    const dialogueByTestId = screen.queryByTestId(DIALOGUE_TESTID);
    const overlayByTestId = screen.queryByTestId(OVERLAY_TESTID);
    const contentByTestId = screen.queryByTestId(CONTENT_TESTID);
    const closeButtonByTestId = screen.queryByTestId(CLOSE_BUTTON_TESTID);
    expect(dialogueByTestId).toBeInTheDocument();
    expect(overlayByTestId).toBeInTheDocument();
    expect(contentByTestId).toBeInTheDocument();
    expect(closeButtonByTestId).toBeInTheDocument();
  });
  it("not displayed when passed the isOpen prop as false", () => {
    render(
      <App isOpen={false} onClose={DEFAULT_CALLBACK} closeOnOverlayClick />
    );
    const dialogueByTestId = screen.queryByTestId(DIALOGUE_TESTID);
    const overlayByTestId = screen.queryByTestId(OVERLAY_TESTID);
    const contentByTestId = screen.queryByTestId(CONTENT_TESTID);
    const closeButtonByTestId = screen.queryByTestId(CLOSE_BUTTON_TESTID);
    expect(dialogueByTestId).not.toBeInTheDocument();
    expect(overlayByTestId).not.toBeInTheDocument();
    expect(contentByTestId).not.toBeInTheDocument();
    expect(closeButtonByTestId).not.toBeInTheDocument();
  });
});
describe("Tests the dialogue component behavior when receive differents closeOnOverlayClick prop value", () => {
  it("overlay no receive pointer curso style when closeOnOverlayClick as false", () => {
    render(
      <App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick={false} />
    );
    const overlayByTestId = screen.queryByTestId(OVERLAY_TESTID);
    expect(overlayByTestId).toHaveStyle("cursor: auto");
  });
  it("overlay receive pointer curso style when closeOnOverlayClick as true", () => {
    render(<App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick />);
    const overlayByTestId = screen.queryByTestId(OVERLAY_TESTID);
    expect(overlayByTestId).toHaveStyle("cursor: pointer");
  });
  it("after click on overlay onClose callback is not called when closeOnOverlayClick as false", () => {
    render(
      <App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick={false} />
    );
    const overlayByTestId = screen.queryByTestId(OVERLAY_TESTID);
    if (overlayByTestId) fireEvent.click(overlayByTestId);
    expect(DEFAULT_CALLBACK).not.toHaveBeenCalled();
  });
  it("after click on overlay onClose callback os called when closeOnOverlayClick as true", () => {
    render(<App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick />);
    const overlayByTestId = screen.queryByTestId(OVERLAY_TESTID);
    if (overlayByTestId) fireEvent.click(overlayByTestId);
    expect(DEFAULT_CALLBACK).toHaveBeenCalled();
  });
});
describe("Test the content received by props", () => {
  it("title is not displayed if title prop not exist", () => {
    render(<App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick />);
    const titleByTestId = screen.queryByTestId(TITLE_TESTID);
    expect(titleByTestId).not.toBeInTheDocument();
  });
  it("title is displayed with the correct value", () => {
    const title = "Default Title";
    render(
      React.createElement(App, {
        isOpen: true,
        onClose: DEFAULT_CALLBACK,
        closeOnOverlayClick: false,
        title: title,
      })
    );
    const titleByTestId = screen.queryByTestId(TITLE_TESTID);
    expect(titleByTestId).toBeInTheDocument();
    expect(titleByTestId).toHaveTextContent(title);
  });
  it("if click on close button call onClose callback", () => {
    render(<App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick />);
    const closeButtonByTestId = screen.queryByTestId(CLOSE_BUTTON_TESTID);
    if (closeButtonByTestId) fireEvent.click(closeButtonByTestId);
    expect(DEFAULT_CALLBACK).toHaveBeenCalled();
  });
  it("description is not displayed if children prop not exist", () => {
    render(<App isOpen onClose={DEFAULT_CALLBACK} closeOnOverlayClick />);
    const descriptionTestId = screen.queryByTestId(DESCRIPTION_TESTID);
    expect(descriptionTestId).not.toBeInTheDocument();
  });
  it("description is displayed if children prop is a string", () => {
    const description = "A nice TexT To TesT";
    render(
      <App
        isOpen
        onClose={DEFAULT_CALLBACK}
        closeOnOverlayClick
        children={description}
      />
    );
    const descriptionTestId = screen.queryByTestId(DESCRIPTION_TESTID);
    expect(descriptionTestId).toBeInTheDocument();
    expect(descriptionTestId).toHaveTextContent(description);
  });
  it("description is displayed if children prop is a HTML/React Element", () => {
    const descriptionText = "A nice TexT To TesT";
    const description = React.createElement("p", null, descriptionText);
    render(
      <App
        isOpen
        onClose={DEFAULT_CALLBACK}
        closeOnOverlayClick
        children={description}
      />
    );
    const descriptionTestId = screen.queryByTestId(DESCRIPTION_TESTID);
    expect(descriptionTestId).toBeInTheDocument();
    expect(descriptionTestId).toHaveTextContent(descriptionText);
  });
});

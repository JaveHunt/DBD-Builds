import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

beforeAll(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
});

afterAll(() => {
  const modalRoot = document.getElementById("modal-root");
  modalRoot.remove();
});

describe("Modal component", () => {
  it("renders children correctly", () => {
    render(
      <Modal onClose={vi.fn()}>
        <div>Test Content</div>
      </Modal>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("calls onClose when background is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Modal onClose={handleClose}>
        <div>Test Content</div>
      </Modal>
    );

    fireEvent.click(
      screen.getByText("Test Content").parentElement.parentElement
    );
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when modal content is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Modal onClose={handleClose}>
        <div>Test Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByText("Test Content"));
    expect(handleClose).not.toHaveBeenCalled();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PerkTooltip from "./Tooltip";

describe("PerkTooltip component", () => {
  const perk = {
    perkImg: "test.png",
    perkName: "Test Perk",
    perkDescription: "This perk does {0} damage and {1} speed.",
    tunables: [
      ["10", "20", "30"],
      ["fast", "faster", "fastest"],
    ],
    level: 1,
  };

  it("renders the image", () => {
    render(<PerkTooltip {...perk} />);
    const img = screen.getByAltText("Test Perk");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "test.png");
  });
  it("shows tooltip on hover and hides on mouse leave", () => {
    render(<PerkTooltip {...perk} />);

    const container = screen.getByAltText("Test Perk").parentElement;
    const tooltip = container.querySelector("div.absolute");

    expect(tooltip).toHaveClass("opacity-0");

    fireEvent.mouseEnter(container);
    expect(tooltip).toHaveClass("opacity-100");

    fireEvent.mouseLeave(container);
    expect(tooltip).toHaveClass("opacity-0");
  });

  it("formats description correctly based on tunables and level", () => {
    render(<PerkTooltip {...perk} />);
    fireEvent.mouseEnter(screen.getByAltText("Test Perk").parentElement);

    expect(screen.getByText(/20 damage/)).toBeInTheDocument();
    expect(screen.getByText(/faster speed/)).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio navigation", () => {
  beforeEach(() => {
    window.location.hash = "#/";
  });

  it("renders the profile and accessible primary navigation", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /building systems that stay reliable/i })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /hugo milair/i })).toBeInTheDocument();
    expect(screen.queryByText("Available")).not.toBeInTheDocument();
  });

  it("navigates to projects and exposes repository links", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("link", { name: "Projects" }));

    expect(screen.getByRole("heading", { name: /projects & experiments/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view compliance form filler on github/i })).toHaveAttribute(
      "href",
      "https://github.com/milairhu/compliance-form-filler",
    );
  });

  it("links directly to both PDF resumes", () => {
    window.location.hash = "#/resume";
    render(<App />);

    expect(screen.getByRole("link", { name: /cv pdf · fr/i })).toHaveAttribute(
      "href",
      "https://raw.githubusercontent.com/milairhu/resume-public/main/sre/Hugo_MILAIR_CV_fr.pdf",
    );
    expect(screen.getByRole("link", { name: /resume pdf · en/i })).toHaveAttribute(
      "href",
      "https://raw.githubusercontent.com/milairhu/resume-public/main/sre/Hugo_MILAIR_CV.pdf",
    );
  });
});

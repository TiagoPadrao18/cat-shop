import { render, screen } from "@testing-library/react";
import LoginPage from "../index";
import { HashRouter } from "react-router-dom";

describe("Login", () => {
  it("should render correctly", () => {
    render(
      <HashRouter>
        <LoginPage />
      </HashRouter>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should go to another url when login is successful", () => {});
});

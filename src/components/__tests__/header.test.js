import { fireEvent, render, screen } from "@testing-library/react";
import Heading from "../Heading";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render header with cart items 0 login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should render header with cart using regex login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("Should change login button to logout in click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("Should render header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  
  expect(logoutButton).toBeInTheDocument();
});

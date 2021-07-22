import { render, screen } from "@testing-library/react";
import App from '../App';

test("renders title", () => {
  render(
    <App />
  );
  const titleElement = screen.getByText(/twitter feed/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders search bar", () => {
    render(
      <App />
    );
    const searchElement = screen.getByTestId('search-bar');
    expect(searchElement).toBeInTheDocument();
  });
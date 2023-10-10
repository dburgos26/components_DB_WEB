import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../Like";

test("Defaults to 0 likes", ()=>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Like increments when clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"))

    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Dislike decrements when clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"))

    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});
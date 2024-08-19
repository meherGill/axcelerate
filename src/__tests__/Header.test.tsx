import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react';
import userEvent from "@testing-library/user-event";
import * as stories from '@stories/Header/Header.stories';

const { Header } = composeStories(stories);

test("it renders properly", () => {
  render (<Header />)

  const headerLabel = screen.queryByText("Some Header");
  expect(headerLabel).toBeTruthy();
})

test("it changes arrow correctly", async () => {
  render(<Header />)

  const arrowImg = screen.getByRole("img");
  expect(arrowImg).toHaveAttribute('src','arrowDown.svg')

  const headerLabel = screen.getByText("Some Header");
  await userEvent.click(headerLabel);

  const arrowImgAfterFirstClick = screen.getByRole("img");
  expect(arrowImgAfterFirstClick).toHaveAttribute('src','arrowRight.svg')

  await userEvent.click(headerLabel);
  const arrowImgAfterSecondClick = screen.getByRole("img");
  expect(arrowImgAfterSecondClick).toHaveAttribute('src','arrowDown.svg')
})
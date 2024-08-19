import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react';
import userEvent from "@testing-library/user-event";
import * as stories from '@stories/FullListSearch/FullListSearch.stories';

const { FullListSearch } = composeStories(stories);

test("it renders properly", () => {
  render (<FullListSearch />)

  const searchBoxEl = screen.queryByPlaceholderText("Search")
  expect(searchBoxEl).toBeTruthy();

  const attendingHeader = screen.queryByText("Attending");
  expect(attendingHeader).toBeTruthy();
  const absentHeader = screen.queryByText("Absent");
  expect(absentHeader).toBeTruthy();
})

test("It searches for users properly", async () => {
  render (<FullListSearch />)
  const searchBoxEl = screen.getByPlaceholderText("Search");

  const listItems = screen.queryAllByTestId("list_item");
  expect(listItems.length).toBe(6);

  let BathlamoreEl = screen.queryByText("Bathlamore");
  expect(BathlamoreEl).toBeTruthy();

  await userEvent.type(searchBoxEl, "Al")
  const newListItems = screen.queryAllByTestId("list_item")
  expect(newListItems.length).toBe(2);

  BathlamoreEl = screen.queryByText("Bathlamore");
  expect(BathlamoreEl).toBeFalsy();
})
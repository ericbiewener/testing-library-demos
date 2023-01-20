import { waitForElementToBeRemoved } from "@testing-library/react";

test("waitForElementToBeRemoved does not time out", async () => {
  const parent = document.createElement("div");
  const child = document.createElement("div");
  parent.appendChild(child)
  await waitForElementToBeRemoved(child);
});

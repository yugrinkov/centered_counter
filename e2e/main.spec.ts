import { test, expect } from "@playwright/test";

test("basic functionality check", async ({ page }) => {
  // Go to the page
  await page.goto("http://localhost:5173/");

  // Filling inputs
  await page.getByLabel("Start at").fill("5");
  await page.getByLabel("Step").fill("8");

  // Clicking on the button
  await page.locator("#counter").click();
  // Checking output
  await expect(page.locator("#counter")).toContainText("13");

  // Updating text inputs with new values
  await page.getByLabel("Start at").fill("1");
  await page.getByLabel("Step").fill("2");

  // Clicking on the button
  await page.locator("#counter").click();
  // Checking output
  await expect(page.locator("#counter")).toContainText("3");
});

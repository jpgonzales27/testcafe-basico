import { fixture, Selector, test } from "testcafe";

fixture`search box Test`.page`http://zero.webappsecurity.com/index.html`;

test("user can search for information using search box", async (t) => {
  const searchBox = Selector("#searchTerm");
  const resultTitle = Selector("h2");
  const linkText = Selector("div").innerText;

  await t.typeText(searchBox, "online bank", { paste: true });
  await t.pressKey("enter");

  await t.expect(resultTitle.exists).ok();
  await t.expect(searchBox.exists).ok();
  await t.expect(linkText).contains("Zero - Free Access to Online Banking");
});

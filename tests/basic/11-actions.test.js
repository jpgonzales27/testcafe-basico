import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {})
  .beforeEach(async (t) => {})
  .after(async (t) => {})
  .afterEach(async (t) => {});

test("Actions", async (t) => {
  // Click
  await t.click("selector", { options });

  // Double Click
  await t.doubleClick("selector", { options });

  // right Click
  await t.rightClick("selector", { options });

  //Drag element
  await t.drag("selector", 200, 0, { options });

  // hover
  await t.hover("selector", { options });

  // select text
  await t.setectText("selector");

  // type text
  await t.typeText("selector", "texto");

  // press key on the keyboard
  await t.pressKey("key");

  // navigate
  await t.url("url");

  //take screenshot
  await t.takeScreenshot();
  await t.takeElementScreenshot();

  //Resize window size
  await t.resizeWindows(800, 600);
});

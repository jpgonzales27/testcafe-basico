import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {})
  .beforeEach(async (t) => {
    /**
     * setTestSpeed acepta valores entre 0.1 y 1 donde 1 es la velocidad
     * maxima y 0.1 es la mas lenta solo usar para debugear
     */
    await t.setTestSpeed(0.1);
  })
  .after(async (t) => {})
  .afterEach(async (t) => {});

test("My first testcafe test", async (t) => {
  await t.typeText("#developer-name", "Juan Pablo");
  await t.click("#submit-button");

  await t.expect(Selector("#article-header").innerText).contains("Juan Pablo");
});

test("My second testcafe test", async (t) => {
  await t
    .typeText("#developer-name", "John Smith")
    .click("#submit-button")
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, John Smith!");
});

import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {})
  .beforeEach(async (t) => {})
  .after(async (t) => {})
  .afterEach(async (t) => {});

test("My first testcafe test", async (t) => {
  await t.typeText("#developer-name", "Juan Pablo");
  /**
   * t.wait es un tiempo de espera que lo definimos en milisegundos
   * no es recomendable usarlo en produccion pero si para debuguear
   * nuestros tests
   */
  await t.wait(3000);
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

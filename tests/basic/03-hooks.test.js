import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {
    //run solo anes de todos los tests
    //test setup
    // await runDatabaseReset
    //await seedTestData
  })
  .beforeEach(async (t) => {
    //run antes de cada test
  })
  .after(async (t) => {
    // run solo al final de todos los test
    // clean test date
    // logear y enviar data para monitorear el sistema
  })
  .afterEach(async (t) => {
    //run despues de cada test
  });

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

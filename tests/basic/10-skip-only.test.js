import { Selector } from "testcafe";

fixture.only`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {})
  .beforeEach(async (t) => {})
  .after(async (t) => {})
  .afterEach(async (t) => {});

/**
 * test.skip nos permite saltar la ejecucion de algun fixture completo
 * o de algunos test en especifico
 *
 * test.only nos permite ejecutar un solo fixture o test en especifico
 */
test.skip("My first testcafe test", async (t) => {
  const developer_name_input = Selector("#developer-name");
  const submit_button = Selector("#submit-button");
  const articleText = Selector("#article-header").innerText;
  await t.typeText(developer_name_input, "Juan Pablo");
  await t.click(submit_button);
  await t.expect(articleText).contains("Juan Pablo");
});

test.only("My second testcafe test", async (t) => {
  const developer_name_input = Selector("#developer-name");
  const submit_button = Selector("#submit-button");
  const articleText = Selector("#article-header").innerText;
  await t
    .typeText(developer_name_input, "John Smith")
    .click(submit_button)
    .expect(articleText)
    .eql("Thank you, John Smith!");
});

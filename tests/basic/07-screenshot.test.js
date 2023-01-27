import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {})
  .beforeEach(async (t) => {})
  .after(async (t) => {})
  .afterEach(async (t) => {});

test("My first testcafe test", async (t) => {
  const developer_name_input = Selector("#developer-name");
  const submit_button = Selector("#submit-button");
  const articleText = Selector("#article-header").innerText;

  /**
   * t.takeScreenshot nos permite sacar una captura de  pantalla
   * en el momento que le indicamos recibe un objeto {fullpage:true}
   * para asignarle la ruta completa donde guardata el screenshot
   */
  await t.takeScreenshot({ fullPage: true });
  /**
   * t.takeElementScreenshot nos permite sacar una captura en un
   * elemento dato que le indicamos a traves de su selector
   */
  await t.takeElementScreenshot(submit_button);
  await t.typeText(developer_name_input, "Juan Pablo");
  await t.click(submit_button);
  await t.expect(articleText).contains("Juan Pablo");
});

test("My second testcafe test", async (t) => {
  const developer_name_input = Selector("#developer-name");
  const submit_button = Selector("#submit-button");
  const articleText = Selector("#article-header").innerText;
  await t
    .typeText(developer_name_input, "John Smith")
    .takeElementScreenshot(submit_button)
    .click(submit_button)
    .expect(articleText)
    .eql("Thank you, John Smith!")
    .takeScreenshot({
      fullPage: true,
    });
});

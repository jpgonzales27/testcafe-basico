import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`;

test("My first testcafe test", async (t) => {
  /**
   * t.typeText('locator','textso que escribiremos')
   * t.click('locator')
   */
  await t.typeText("#developer-name", "Juan Pablo");
  await t.click("#submit-button");
  /**
   * Usamos selector para filtrar el DOM y usar los valores reales en la pagina
   * con innerText obtenemos el valor que tiene ese elemento
   *
   * t.expect(valor real).eql(valor esperado) los textos son iguales
   * t.expect(valor real).contains(valor esperado) el texto real contiene el texto buscado
   */
  await t.expect(Selector("#article-header").innerText).contains("Juan Pablo");
});

test("My second testcafe test", async (t) => {
  /**
   * Tambien podemos encadenar la ejecucion de multipees acciones
   * t.typeText('locator','textso que escribiremos').click('locator')
   */
  await t
    .typeText("#developer-name", "John Smith")
    .click("#submit-button")
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, John Smith!");
});

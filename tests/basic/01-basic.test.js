import { Selector } from "testcafe";

/**
 * Fixture consta de un titulo y el page sera la url donde
 * correremos nuestros tests
 */
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
    /**
     * setTestSpeed acepta valores entre 0.1 y 1 donde 1 es la velocidad
     * maxima y 0.1 es la mas lenta solo usar para debugear
     */
    await t.setTestSpeed(0.1);
  })
  .after(async (t) => {
    // run solo al final de todos los test
    // clean test date
    // logear y enviar data para monitorear el sistema
  })
  .afterEach(async (t) => {
    //run despues de cada test
  });

/**
 * test consta de un titulo seguido de una funcion asyncrona
 * la cual le pasamos un parametro t(testController) por convencion
 *
 * con el cual podremos acceder a todos los metodos que tiene testcafe
 * haciendo uso de await para esperar la resolucion de cada accion
 */

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

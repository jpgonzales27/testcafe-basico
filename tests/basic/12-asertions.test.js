import { Selector } from "testcafe";

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example/`
  .before(async (t) => {})
  .beforeEach(async (t) => {})
  .after(async (t) => {})
  .afterEach(async (t) => {});

test("Actions", async (t) => {
  // Deep equal
  await t.expect("foo").eql("foo", "message", options);
  // NOT Deep equal
  await t.expect("foo").notEql("foo");

  // OK
  await t.expect(true).ok();
  // NOT ok
  await t.expect(true).notOk();

  // contains
  await t.expect("foo").contains("o");
  // NOT contains
  await t.expect("foo").notContains("hey");

  // greater or less than
  await t.expect(10).gt(7); //10>7
  await t.expect(10).gte(10); //10>=10
  await t.expect(10).lt(7); //10<7
  await t.expect(10).lte(7); //10<=7

  // within
  await t.expect(10).within(1, 100); //10 este entre 1 y 100
  // not within
  await t.expect(10).notWithin(5, 50); //10 no este entre 5 y 50
});

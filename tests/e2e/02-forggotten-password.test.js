import { fixture, Selector, test } from "testcafe";

fixture`forget password Test`.page`http://zero.webappsecurity.com/`;

test("User can request new passowrd to send to his email", async (t) => {
  //get selectors
  const signinButton = Selector("#signin_button");
  const linkToPassword = Selector("a").withText("Forgot your password ?");
  const emailInput = Selector("#user_email");
  const message = Selector("div").innerText;

  //actions
  await t.click(signinButton);
  await t.click(linkToPassword);
  await t.typeText(emailInput, "email@random.com", { paste: true });
  await t.pressKey("enter");

  //assertions
  await t.expect(message).contains("email@random.com");
  await t.expect(emailInput.exists).notOk();
});

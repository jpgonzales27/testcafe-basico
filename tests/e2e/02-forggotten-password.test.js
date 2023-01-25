import { fixture, Selector, test } from "testcafe";

fixture`Login Test`.page`http://zero.webappsecurity.com/`;

test("User cannot login with invalid credentials", async (t) => {
  const signin_button = Selector("#signin_button");
  await t.click(signin_button);

  const loginForm = Selector("#login_form");
  await t.expect(loginForm.exists).ok();

  const usernameInput = Selector("#user_login");
  const passwordInput = Selector("#user_password");
  await t.typeText(usernameInput, "invalid user", { paste: true });
  await t.typeText(passwordInput, "invalid password", { paste: true });

  const submitButton = Selector(".btn-primary");
  await t.click(submitButton);

  const errorMessage = Selector(".alert-error").innerText;
  await t.expect(errorMessage).contains("Login and/or password are wrong.");
});

test("User can login into the application", async (t) => {
  const signInButton = Selector("#signin_button");
  await t.click(signInButton);

  const loginForm = Selector("#login_form");
  await t.expect(loginForm.exists).ok();

  const usernameInput = Selector("#user_login");
  const passwordInput = Selector("#user_password");
  await t.typeText(usernameInput, "username", { paste: true });
  await t.typeText(passwordInput, "password", { paste: true });

  const submitButton = Selector(".btn-primary");
  await t.click(submitButton);

  const accountSumaryTab = Selector("#account_sumary_tab");
  await t.expect(accountSumaryTab).ok();
  await t.expect(loginForm.exists).notOk();

  const userIcon = Selector(".icon-user");
  await t.click(userIcon);

  const logoutButton = Select("#logout_link");
  await t.click(logoutButton);

  await t.expect(logoutButton.exists).notOk();
  await t.expect(signInButton.exists).ok();
});

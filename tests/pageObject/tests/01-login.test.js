import { fixture, Selector, test } from "testcafe";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage";

const navbar = new Navbar();
const loginPage = new LoginPage();
fixture`Login Test`.page`http://zero.webappsecurity.com/`;

test.only("User cannot login with invalid credentials", async (t) => {
  await t.click(navbar.signInButton);

  await t.expect(loginPage.loginForm.exists).ok();

  loginPage.loginToApp("invalid username", "invalid password");

  await t
    .expect(loginPage.errorMessage.innerText)
    .contains("Login and/or password are wrong.");
});

test("User can login into the application", async (t) => {
  await t.click(navbar.signInButton);
  await t.expect(loginPage.loginForm.exists).ok();

  login.loginToApp("invalid username", "invalid password");

  const accountSumaryTab = Selector("#account_sumary_tab");
  await t.expect(accountSumaryTab.exists).ok();
  await t.expect(loginPage.loginForm.exists).notOk();

  await t.click(navbar.userIcon);
  await t.click(navbar.logoutButton);

  await t.expect(navbar.logoutButton.exists).notOk();
  await t.expect(navbar.signInButton.exists).ok();
});

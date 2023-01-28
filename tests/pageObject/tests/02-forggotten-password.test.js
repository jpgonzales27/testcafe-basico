import { fixture, test } from "testcafe";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage";
import ForgottenPasswordPage from "../pages/ForgottenPasswordPage";

const navbar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

fixture`forget password Test`.page`http://zero.webappsecurity.com/`;

test("User can request new passowrd to send to his email", async (t) => {
  //actions
  await t.click(navbar.signInButton);
  await t.click(loginPage.linkToPassword);

  forgottenPasswordPage.sendEmail("email@random.com");

  //assertions
  await t
    .expect(forgottenPasswordPage.message.innerText)
    .contains("email@random.com");
  await t.expect(forgottenPasswordPage.emailInput.exists).notOk();
});

import { Selector, t } from "testcafe";

class ForgottenPasswordPage {
  constructor() {
    this.emailInput = Selector("#user_email");
    this.message = Selector("div");
  }

  async sendEmail(email) {
    await t
      .typeText(this.emailInput, email, { paste: true, replace: true })
      .pressKey("enter");
  }
}

export default ForgottenPasswordPage;

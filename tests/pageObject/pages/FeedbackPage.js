import { Selector, t } from "testcafe";

class FeedbackPage {
  constructor() {
    this.linkToFeedback = Selector("#feedback");
    this.form_name = Selector("#name");
    this.form_email = Selector("#email");
    this.form_subject = Selector("#subject");
    this.form_comment = Selector("#comment");
    this.form_submitButton = Selector("input").withAttribute(
      "value",
      "Send Message"
    );
    this.message = Selector("div");
  }

  async loginToApp(username, password) {
    await t
      .typeText(this.usernameInput, username, { paste: true, replace: true })
      .typeText(this.passwordInput, password, { paste: true, replace: true })
      .click(this.submitButton);
  }
}

export default FeedbackPage;

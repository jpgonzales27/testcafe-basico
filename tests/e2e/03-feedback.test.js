import { fixture, Selector, test } from "testcafe";

fixture`Feedback Test`.page`http://zero.webappsecurity.com/index.html`;

test("user can submit feedback via form", async (t) => {
  const linkToFeedback = Selector("#feedback");
  const form_name = Selector("#name");
  const form_email = Selector("#email");
  const form_subject = Selector("#subject");
  const form_comment = Selector("#comment");
  const form_submitButton = Selector("input").withAttribute(
    "value",
    "Send Message"
  );
  const message = Selector("div").innerText;

  await t.click(linkToFeedback);
  await t.typeText(form_name, "NAME", { paste: true });
  await t.typeText(form_email, "test@gmail.com", { paste: true });
  await t.typeText(form_subject, "SUBJECT", { paste: true });
  await t.typeText(form_comment, "your comment goes here", { paste: true });
  await t.click(form_submitButton);

  await t.expect(message).contains("Thank you for your comments");
});

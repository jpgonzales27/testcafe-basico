import { fixture, Selector, test } from "testcafe";
import FeedbackPage from "../pages/FeedbackPage";

const feedbackPage = new FeedbackPage();
fixture`Feedback Test`.page`http://zero.webappsecurity.com/index.html`;

test("user can submit feedback via form", async (t) => {
  await t.click(feedbackPage.linkToFeedback);
  await t.typeText(feedbackPage.form_name, "NAME", { paste: true });
  await t.typeText(feedbackPage.form_email, "test@gmail.com", { paste: true });
  await t.typeText(feedbackPage.form_subject, "SUBJECT", { paste: true });
  await t.typeText(feedbackPage.form_comment, "your comment goes here", {
    paste: true,
  });

  feedbackPage.waitFor(4000);
  await t.click(feedbackPage.form_submitButton);

  await t
    .expect(feedbackPage.message.innerText)
    .contains("Thank you for your comments");
});

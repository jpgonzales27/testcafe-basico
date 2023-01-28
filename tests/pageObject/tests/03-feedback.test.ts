import { fixture, Selector, test } from "testcafe";
import FeedbackPageTS from "../pages/FeedbackPageTS";

const feedbackPageTS = new FeedbackPageTS();
fixture`Feedback Test`.page`http://zero.webappsecurity.com/index.html`;

test("user can submit feedback via form", async (t) => {
  await t.click(feedbackPageTS.linkToFeedback);
  feedbackPageTS.submitFeedback(t);
  await t
    .expect(feedbackPageTS.message.innerText)
    .contains("Thank you for your comments");
});

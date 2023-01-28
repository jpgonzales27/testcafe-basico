import { Selector, t } from "testcafe";

class BasePage {
  async waitFor(milliseconds) {
    await t.wait(milliseconds);
  }

  async setSpeed(speedlevel) {
    await t.setTestSpeed(speedlevel);
  }
}

export default BasePage;

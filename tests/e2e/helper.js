import { t } from "testcafe";

export const login = async (username, password) => {
  await t.click(signinButton);
  await t.typeText(usernameInput, username, { paste: true });
  await t.typeText(passwordInput, password, { paste: true });
  await t.click(submitButton);
};

import { fixture, Selector, test } from "testcafe";
import xPathToCss from "xpath-to-css";
fixture`search box Test`.page`http://zero.webappsecurity.com/index.html`;

test("user can search for information using search box", async (t) => {
  const xPath =
    '//div[@id="foo"][2]/span[@class="bar"]//a[contains(@class, "baz")]//img[1]';
  const css = xPathToCss(xPath);
  console.log(css);
});

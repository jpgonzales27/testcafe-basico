import { fixture, test } from "testcafe";
import Navbar from "../components/Navbar";
import SearchResultPage from "../pages/SearchResultsPage";

const navbar = new Navbar();
const searchResultPage = new SearchResultPage();

fixture`search box Test`.page`http://zero.webappsecurity.com/index.html`;

test("user can search for information using search box", async (t) => {
  //Actions == Components
  navbar.search("online bank");

  //Asertions == Pages
  await t.expect(navbar.searchBox.exists).ok();
  await t.expect(searchResultPage.resultsTitle.exists).ok();
  await t
    .expect(searchResultPage.linkText.innerText)
    .contains("Zero - Free Access to Online Banking");
});

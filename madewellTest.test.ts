//
import { madewellPage } from "./pageObjects";

const myTest = new madewellPage

test("Search for an item", async () => {
    await myTest.navigate()
    await myTest.click(myTest.searchBtn)
    await myTest.setInput(myTest.whatAreYouLookingForInput, "jeans")
    await myTest.click(myTest.magnifyingGlassIcon)
    let response = await myTest.getText(myTest.resultsSearchJeans)
    expect(response).toContain("jeans")

})
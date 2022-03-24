//
import { madewellPage } from "./pageObjects";

const myTest = new madewellPage

test("Search for an item", async () => {
    await myTest.navigate()
    await myTest.click(myTest.searchBtn)
    await myTest.setInput(myTest.whatAreYouLookingForInput, "jeans")
    await myTest.click(myTest.magnifyingGlassIcon)
    let response = await myTest.getText(myTest.resultsSearchJeans)
    expect(response).toContain("JEANS")

});
test("Add to bag test", async () => {
    await myTest.navigate()
    await myTest.click(myTest.searchBtn)
    await myTest.setInput(myTest.whatAreYouLookingForInput, "womens shirts")
    await myTest.click(myTest.magnifyingGlassIcon)
    await myTest.click(myTest.shirtBtn)
    await myTest.click(myTest.shirtSize)
    await myTest.click(myTest.addToBagBtn)
    await myTest.click(myTest.bagIcon)
    let response = await myTest.getText(myTest.shoppingBagHeader)
    expect(response).toContain("SHOPPING BAG")
});
test("Remove from bag test", async() => {
    await myTest.navigate()
    await myTest.click(myTest.bagIcon)
    await myTest.click(myTest.removeBtn)
    let response = await myTest.getText(myTest.yourBagIsEmpty)
    expect(response).toContain("YOUR SHOPPING BAG IS EMPTY")
});
test("Store locator test", async () => {
    await myTest.navigate()
    await myTest.click(myTest.findAStoreBtn)
    await myTest.setInput(myTest.enterYourSearchInput, "84096")
    await myTest.click(myTest.arrowBtn)
    let response = await myTest.getText(myTest.locationHeader)
    expect(response).toContain("2 locations near Herriman, UT")
});
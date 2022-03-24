//
import {By, WebDriver} from "selenium-webdriver";
import {BasePage} from "./basePage"

export class madewellPage extends BasePage {

    //first test search for an item
    searchBtn: By = By.xpath('(//button[@class="launch-search"])[3]')
    whatAreYouLookingForInput: By = By.xpath('//input[@class="q valid"]')
    magnifyingGlassIcon: By = By.xpath('(//button[@class="submit-search"])[3]')
    resultsSearchJeans: By = By.xpath('//div[@class="results-search-term"]')

    //second test add to bag, search button, what are you looking for, magnifying icon first
    shirtBtn: By = By.xpath ('(//img[@class="primary-image lazyautosizes lazyloaded"])[9]')
    shirtSize: By = By.xpath('(//li[@class="selectable  "])[3]')
    addToBagBtn: By = By.xpath('//div[@class="add-to-cart-button-wrapper js-capture-disabled-click"]')
    bagIcon: By = By.xpath('//span[@class="mini-cart-icon-alignment"]')
    shoppingBagHeader: By = By.xpath('//h1[@class="cart-header"]')

    //third test remove from bag, bag icon first
    removeBtn: By = By.xpath('(//button[@class="button-text remove"])[1]')
    yourBagIsEmpty: By = By.xpath('//h1[@class="cart-header"]')

    //fourth test store locator
    findAStoreBtn: By = By.xpath('(//a[@href="http://stores.madewell.com"])[1]')
    enterYourSearchInput: By = By.xpath('//input[@class="search-input Hero-input js-hero-input"]')
    arrowBtn: By = By.xpath('//button[@class="Hero-button Hero-geolocate js-hero-geolocateTrigger"]')
    locationHeader: By = By.xpath('//div[@class="ResultSummary"]')


    constructor() {
        super({url: 'https://www.madewell.com/'})
}}

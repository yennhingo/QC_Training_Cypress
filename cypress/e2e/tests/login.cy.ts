import LoginPage from "../pages/loginPage";

const loginData = require("../../fixtures/login")

describe("Login test", ()=> {
    beforeEach("Open the login page", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit("/login")
        cy.wait(2000)
        cy.get(LoginPage.userForm).should("be.visible")
    })
    it("TC1: Login successfully with css selector", () => {
        cy.get(LoginPage.userName).clear().type(loginData.userName)
        cy.get(LoginPage.passWord).clear().type(loginData.passWord)
        cy.get(LoginPage.loginBtn).click()
        cy.get(LoginPage.usernameLabel, {timeout: 10000}).should("be.visible")
    })

    it("TC2: Login successfully with xpath", () => {
        cy.xpath(LoginPage.userNameXpath).clear().type(loginData.userName)
        cy.xpath(LoginPage.passWordXpath).clear().type(loginData.passWord)
        cy.xpath(LoginPage.loginBtnXpath).click()
        cy.xpath(LoginPage.usernameLabelXpath, {timeout: 5000}).should("be.visible")
    })
})
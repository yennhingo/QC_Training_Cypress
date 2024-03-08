import apiLoginPage from "../pages/apiLoginPage";

describe("Api testing", () => {
    it("TC1: Get list books success", () => {
        cy.request({
            method: "GET",
            url: apiLoginPage.getBook,
        }).then((response) => {
            expect(response.status).to.eq(200)
            const responseBodyString = JSON.stringify(response.body, null, 2); // Convert to formatted JSON string
            cy.log(responseBodyString);
        })
    })
    // it("TC2: Create a new book successfully", () => {
    //     // Define the book data to be sent in the POST request
    //     const newBookData = {
    //         title: "New Book Test",
    //         author: "Nhi Ngo",
    //         isbn: "978-3-16-148410-0"
    //     };

    //     // Make a POST request to create a new book
    //     cy.request({
    //         method: "POST",
    //         url: apiLoginPage.createBook,
    //         body: newBookData,
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then((response) => {
    //         // Verify that the response status is 201 (Created)
    //         expect(response.status).to.eq(200);

    //         // Log the response body
    //         const responseBodyString = JSON.stringify(response.body, null, 2); // Convert to formatted JSON string
    //         cy.log(responseBodyString);
    //     });
    // });
})
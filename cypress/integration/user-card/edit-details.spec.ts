/// <reference types="cypress" />

describe("UserCard - User Details, Edit Details, Delete User, Display Location", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('can edit user details', () => {
        cy.wait(2000);
        cy.get("#edit-modal-trigger").first().click();

        cy.get("#name").clear().type("Cypress Test User");

        cy.get("#edit-form").submit();
        cy.wait(1000);

        cy.get("[role=alert]").first().should("be.visible").and("have.text", "SUCCESS :: User successfully updated.")
    });
});
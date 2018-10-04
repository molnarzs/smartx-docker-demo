describe('Simple test', () => {
    it("Focuses the button", () => {
        cy.visit('/');
        cy.focused()
            .should('have.class', 'fetch-button');
    });
})
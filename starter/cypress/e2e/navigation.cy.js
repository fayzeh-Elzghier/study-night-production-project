describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it('should navigate to the Card Set page when clicking "Card Set"', () => {
    cy.contains("Card Set").click();
    cy.contains("Add New Set").should("exist");
  });

  it('should navigate to the About page when clicking "About"', () => {
    cy.contains("About").click();
    cy.contains("About Study Night").should("exist");
  });

  it('should navigate to the Home page when clicking "Home"', () => {
    cy.contains("Home").click();
    cy.contains("Study Night").should("exist");
  });
});
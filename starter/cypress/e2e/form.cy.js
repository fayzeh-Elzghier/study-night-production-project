describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should create a new study set with valid input", () => {
    cy.contains("Card Set").click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').should("be.visible");
    cy.get('input[name="titleInput"]').type("My Test Set");
    cy.get('[data-cy="set_form"]').submit();
    cy.contains("My Test Set").should("exist");
  });

  it("should show an error when study set title is empty", () => {
    cy.contains("Card Set").click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').should("be.visible");
    cy.get('[data-cy="set_form"]').submit();
    cy.contains("TITLE CANNOT BE EMPTY").should("exist");
  });

  it("should create a new card with valid input", () => {
    cy.contains("Card Set").click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="card_form"]').should("be.visible");
    cy.get('input[name="termInput"]').type("HTML");
    cy.get('input[name="descriptionInput"]').type("Markup language");
    cy.get('[data-cy="card_form"]').submit();
    cy.contains("HTML").should("exist");
  });

  it("should show an error when card form inputs are empty", () => {
    cy.contains("Card Set").click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="card_form"]').should("be.visible");
    cy.get('[data-cy="card_form"]').submit();
    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
  });
});
/// <reference types="cypress" />

// funcionalidade
describe("Login", () => {
  it("Login com sucesso", () => {
    // DADOS
    // Abrir a página
    cy.visit("https://automationpratice.com.br/login");

    // Preencher usuário e senha
    cy.get("#user").type("myth.gustavo06@gmail.com");
    cy.get("#password").type("L0qdQPkBR1wcshL");

    // QUANDO
    //Clicar em Login
    cy.get("#btnLogin").click();

    //ENTÂO
    //Validar mensagem de sucesso
    cy.get("#swal2-title").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Login realizado");
  });

  it("E-mail invalido", () => {
    // DADOS
    // Abrir a página
    cy.visit("https://automationpratice.com.br/login");

    // Preencher usuário e senha
    cy.get("#user").type("myasdasdasd");
    cy.get("#password").type("L0qdQPkBR1wcshL");

    // QUANDO
    //Clicar em Login
    cy.get("#btnLogin").click();

    //ENTÂO
    //Validar mensagem de sucesso
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  });

  it("Senha invalida", () => {
    // DADOS
    // Abrir a página
    cy.visit("https://automationpratice.com.br/login");

    // Preencher usuário e senha
    cy.get("#user").type("myth.gustavo06@gmail.com");
    cy.get("#password").type("aaa");

    // QUANDO
    //Clicar em Login
    cy.get("#btnLogin").click();

    //ENTÂO
    //Validar mensagem de sucesso
    cy.get(".invalid_input").should("have.text", "Senha inválida.");
  });

  it("E-mail vazio", () => {
    // DADOS
    // Abrir a página
    cy.visit("https://automationpratice.com.br/login");

    // Preencher usuário e senha
    cy.get("#password").type("L0qdQPkBR1wcshL");

    // QUANDO
    //Clicar em Login
    cy.get("#btnLogin").click();

    //ENTÂO
    //Validar mensagem de sucesso
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  });

  it("Senha vazia", () => {
    // DADOS
    // Abrir a página
    cy.visit("https://automationpratice.com.br/login");

    // Preencher usuário e senha
    cy.get("#user").type("myth.gustavo06@gmail.com");

    // QUANDO
    //Clicar em Login
    cy.get("#btnLogin").click();

    //ENTÂO
    //Validar mensagem de sucesso
    cy.get(".invalid_input").should("have.text", "Senha inválida.");
  });
});

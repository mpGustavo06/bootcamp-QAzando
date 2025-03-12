/// <reference types="cypress" />

describe("Buscar dispositivos", () => {
  it("Buscar dispositivos especificos", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/7",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal("7");
    });
  });

  it("Buscar dispositivos inexistentes", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/naoexiste",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body.error).to.equal(
        "Oject with id=naoexiste was not found."
      );
    });
  });

  it("Cadastrar dispositivos inexistentes", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Teste",
        data: {
          year: "2022",
          price: 1000,
          CPU: "Intel",
          "Hard Disk": "SSD",
          cor: "Preto",
        },
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Teste");
    });
  });
});

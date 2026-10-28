describe("Funcionalidade: Contato", () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('#name').type('Fabio Passos')
    cy.get('#email').type('fabio.passos.perim@gmail.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
    });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => { 
    cy.get('#name').clear()
    cy.get('#email').type('fabio.passos.perim@gmail.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert.container').should('contain', 'Por favor, preencha o campo nome')
  });
  
  it('Deve validar mensagem de erro ao enviar sem preencher e-mail', () => { 
    cy.get('#name').type('Fabio Passos')
    cy.get('#email').clear()
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert.container').should('contain', 'Por favor, preencha o campo e-mail')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => { 
    cy.get('#name').type('Fabio Passos')
    cy.get('#email').type('fabio.passos.perim@gmail.com')
    //cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert.container').should('contain', 'Por favor, selecione o Assunto')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('#name').type('Fabio Passos')
    cy.get('#email').type('fabio.passos.perim@gmail.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert.container').should('contain', 'Por favor, escreva sua mensagem')
 });

});


/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('End to end: Cadastro e Login no Hub de Leitura', () => {

  it('O usuário deve se cadastrar e fazer login com sucesso', () => {

    // 1. Faker
    const nome = faker.person.fullName();
    const email = faker.internet.email().toLowerCase();
    const phone = faker.string.numeric(10);
    const password = faker.internet.password();

    // 2. Acessar o site e fazer cadastro
    cy.visit('http://localhost:3000/register.html');
    cy.get('[href="/register.html"]').click()
    cy.get('#name').type(nome);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#password').type(password);
    cy.get('#confirm-password').type(password);
    cy.get('#terms-agreement').check();
    cy.get('#register-btn').click();

    // 3. Cadastro bem-sucedido e logout
    cy.url().should('include', 'dashboard');
    cy.get('#user-name').should('contain', nome);
    cy.get('.user-actions > .btn-outline-danger').click();

    // 4. Acessar o login
    cy.visit('http://localhost:3000/login');

    // 5. Preencher e enviar o formulário de login
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login-btn').click();

    // 6. Validar login bem-sucedido
    cy.url().should('include', 'dashboard');
    cy.get('#user-name').should('contain', nome);
  });

});



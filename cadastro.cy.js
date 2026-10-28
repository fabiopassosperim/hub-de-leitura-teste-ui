/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html');
    });

    it('Deve realizar cadastro com sucesso usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`;

        cy.get('#name').type('Fabio Passos');
        cy.get('#email').type(email);
        cy.get('#phone').type('11998432194');
        cy.get('#password').type('senha123');
        cy.get('#confirmPassword').type('senha123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', 'dashboard');
    });

    it('Deve realizar cadastro com sucesso usando Faker', () => {
        let nome = faker.person.fullName();
        let email = faker.internet.email();

        cy.get('#name').type(nome);
        cy.get('#email').type(email);
        cy.get('#phone').type('11998432194');
        cy.get('#password').type('senha123');
        cy.get('#confirmPassword').type('senha123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', 'dashboard');
        cy.get('#username').should('contain', nome);
    });

});



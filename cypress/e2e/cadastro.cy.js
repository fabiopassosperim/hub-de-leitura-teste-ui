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
        cy.get('#phone').type('999999999');
        cy.get('#password').type('senha123');
        cy.get('#confirm-password').type('senha123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.contains('Conta criada com sucesso! Fazendo login...').should('exist');
    });

    it('Deve realizar cadastro com sucesso usando Faker', () => {
        let nome = faker.person.fullName();
        let email = faker.internet.email();

        cy.get('#name').type(nome);
        cy.get('#email').type(email);
        cy.get('#phone').type('999999999');
        cy.get('#password').type('senha123');
        cy.get('#confirm-password').type('senha123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.contains('Conta criada com sucesso! Fazendo login...').should('exist');
    });

});



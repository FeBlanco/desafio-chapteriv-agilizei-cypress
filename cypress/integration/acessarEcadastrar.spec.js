 ///    < reference types="cypress"  /> 

 var Chance = require('chance')
var chance = new Chance()

describe('AcessarPaginadeCadastro', () => {
    it('Quando Acessar a pagina inicial, entrar em sign in para preenchimento do email para ser encaminhado a pagina de cadastro ', () => {
    
        //Suites de testes pagina inicial -> pagina authentication -> pagina do cadastro
        //  pagina inicial
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()

        // pagina authentication
    cy.url().should('contain', 'http://automationpractice.com/index.php?controller=authentication&back=my-account')
    cy.get('.page-heading')
    cy.get('input[id=email_create]').type(chance.email())
    cy.get('button[id=SubmitCreate]').click()
   

        // pagina do cadastro -> informações pessoais
    cy.url().should('contain', 'http://automationpractice.com/index.php?controller=authentication&back=my-account')
    cy.get('input[id=id_gender1]').check()
    cy.get('input[id=customer_firstname]').type(chance.first())
    cy.get('input[id=customer_lastname]').type(chance.last())
    cy.get('input[id=email]').click()
    cy.get('input[id=passwd]').type('Bl@anco')
    cy.get('select#days').select('10', { force: true})
    cy.get('select#months').select('April', { force: true})
    cy.get('select#years').select('2010', { force: true})
    cy.get('input[id=newsletter]').check()
    cy.get('input[id=optin]').check()

        // pagina do cadastro -> informações do endereço
    cy.get('input[id=firstname]').type(chance.first())
    cy.get('input[id=lastname]').type(chance.last())
    cy.get('input[id=company]').type(chance.company())
    cy.get('input[id=address1]').type(chance.street(), chance.state())
    cy.get('input[id=address2]').type(chance.address())
    cy.get('input[id=city]').type(chance.city())
    cy.get('select#id_state').select('Florida', { force: true})
    cy.get('input[id=postcode]').type(chance.zip())
    // cy.get('select#id_country').select('United States', { force: true})
    cy.get('textarea[id=other]').type(chance.syllable())
    cy.get('input[id=phone]').type(chance.phone())
    cy.get('input[id=phone_mobile]').type(chance.phone())
    cy.get('input[id=alias]').type(chance.address())
    cy.get('button[id=submitAccount]').click()

    // pagina "minha conta"
    cy.url().should('contain', 'http://automationpractice.com/index.php?controller=my-account')
    cy.get('.page-heading')


    });
});
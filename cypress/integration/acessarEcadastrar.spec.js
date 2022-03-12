 ///    < reference types="cypress"  /> 

 var Chance = require('chance')
var chance = new Chance()

describe('AcessarPaginadeCadastro', () => {
    it('Criando o cadastro partindo da página inicial, informando um email e senha corretos para ser encaminhado a página de formulário para preencimento finalização do cadastro', () => {
    
        //Suites de testes pagina inicial -> pagina authentication -> pagina do cadastro
        //  pagina inicial
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()

        // pagina authentication
    cy.url().should('contain', 'authentication&back=my-account')
    cy.get('.page-heading')
    cy.get('input#email_create').type(chance.email())
    cy.get('button#SubmitCreate').click()
   

        // pagina do cadastro -> informações pessoais
    cy.url().should('contain', 'authentication&back=my-account')
    cy.get('input#id_gender1').check()
    cy.get('input#customer_firstname').type(chance.first())
    cy.get('input#customer_lastname').type(chance.last())
    cy.get('input#email').click()
    cy.get('input#passwd').type('Bl@anco')
    cy.get('select#days').select('10', { force: true})
    cy.get('select#months').select('April', { force: true})
    cy.get('select#years').select('2010', { force: true})
    cy.get('input#newsletter').check()
    cy.get('input#optin').check()

        // pagina do cadastro -> informações do endereço
    cy.get('input#firstname').type(chance.first())
    cy.get('input#lastname').type(chance.last())
    cy.get('input#company').type(chance.company())
    cy.get('input#address1').type(chance.street(), chance.state())
    cy.get('input#address2').type(chance.address())
    cy.get('input#city').type(chance.city())
    cy.get('select#id_state').select('Florida', { force: true})
    cy.get('input#postcode').type(chance.zip())
    cy.get('textarea[id=other]').type(chance.syllable())
    cy.get('input#phone').type(chance.phone())
    cy.get('input#phone_mobile').type(chance.phone())
    cy.get('input#alias').type(chance.address())
    cy.get('button#submitAccount').click()

    // pagina "minha conta"
    cy.url().should('contain', 'controller=my-account')
    cy.get('.page-heading').should ('have.text', 'My account')


    });
});
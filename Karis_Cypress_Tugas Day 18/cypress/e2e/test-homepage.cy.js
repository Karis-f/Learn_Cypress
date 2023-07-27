// cypress/e2e/homepage.cy.js
/// <reference types="cypress" />

import Navigation from '../page/Navigation';
import ProductLocator from '../page/ProductLocator';

describe('Homepage Test Suite', () => {
    beforeEach(() => {
        Navigation.visitHomepage();

    });

    it('should contain specific content on the homepage', () => {
        // Verify that the homepage contains some specific text or elements
        cy.get('.home-main > .content > .info').should('be.visible');
        cy.get('.content-heading > .title').should('be.visible');
    });

    it('should contain hot selling on the homepage', () => {
        // Verify that the homepage contains some specific text or elements
        cy.get('.content-heading > .title').should('be.visible');
    });

    it('should search for a product', () => {
        const productName = 'T-shirt'; // Replace with the product you want to search for
        // Verify that the homepage can search the product without login
        cy.get('#search').type(productName);
        cy.get('button[title="Search"]').click();
        cy.url().should('include', 'catalogsearch/result/');
        cy.contains('h1', `Search results for: '${productName}'`);
    });

    it('should display popular products on the homepage', () => {
        // Verify that the homepage contains the popular product
        const productLinkLocator = ProductLocator.getProductLink();
        cy.get(productLinkLocator).should('have.length.above', 0);
    });
});

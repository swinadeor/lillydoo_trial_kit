describe('Lillydoo Trial Kit Test', function() {
  it('Check regular use case where the img of the product selection changes when the user selects a specific kit', function() {
    cy.visit('http://localhost:8080')

    cy.get('div[class="product-selection__option product-selection__option--relative product-selection__option--no-space"]').find('img[class="product-selection__option__img"]').should('have.attr', 'src').should('include','lillydoo-trial-kit-10')
    cy.get('div[class="product-details__img gap-right-3 towel-details-img"]').find('img').should('have.attr', 'src').should('include','water-wipes-15-small')

    cy.contains('(10-12KG)').click()

    cy.get('div[class="product-selection__option product-selection__option--relative product-selection__option--no-space"]').find('img[class="product-selection__option__img"]').should('have.attr', 'src').should('include','lillydoo-trial-kit-50')
    cy.get('div[class="product-details__img gap-right-3 towel-details-img"]').find('img').should('have.attr', 'src').should('include','sensitive-wipes-15-small')
  })

  it('Check use case where the img of the product selection changes when the user selects a specific kit but not the img of the product details', function() {
    cy.visit('http://localhost:8080')

    cy.get('div[class="product-selection__option product-selection__option--relative product-selection__option--no-space"]').find('img[class="product-selection__option__img"]').should('have.attr', 'src').should('include','lillydoo-trial-kit-10')
    // cy.get('div[class="product-details__img gap-right-3 towel-details-img"]').find('img').should('have.attr', 'src').should('include','water-wipes-15-small')

    cy.contains('(3-4KG)').click()

    cy.get('div[class="product-selection__option product-selection__option--relative product-selection__option--no-space"]').find('img[class="product-selection__option__img"]').should('have.attr', 'src').should('include','lillydoo-trial-kit-20')
    cy.get('div[class="product-details__img gap-right-3 towel-details-img"]').find('img').should('have.attr', 'src').should('include','water-wipes-15-small')
  })
})

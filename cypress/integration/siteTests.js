describe('go to the site Easy Surf', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
        cy.wait(1000)
    })


    it('header link Home goes to upper of the site', () => {
        cy.get('a[href="#Home"]').click()
        cy.location('hash').should('eq', '#Home')
        // cy.location().should((loc) => {
        //     expect(loc.hash).to.eq('#Home')
        // })
        // cy.url().should('include', '/users/1/edit')
    })

    it('header link Surf Spots goes to Surf Spots title', () => {
        cy.get('a[href="#SurfSpots"]').click()
        .location('hash').should('eq', '#SurfSpots')

        cy.get("#SurfSpots").should(($e) => {
            expect($e[0].getClientRects()[0].top).lessThan(52);
            expect($e[0].getClientRects()[0].top).greaterThan(50);
        });
        
    })

    it('header link Coffee Shops goes to Coffee title', () => {
        cy.get('a[href="#CoffeeShops"]').click()
        cy.location('hash').should('eq', '#CoffeeShops')
    })




    it('link Rocks from map goes to the description ', () => {
    
        cy.get('#surf-spot-rock').click()
        .should('have.text', 'THE ROCK')
    })

    it('link Zippers from map goes to the description ', () => {
    
        cy.get('#surf-spot-zippers').click()
        .should('have.text', 'ZIPPERS')
    })

    it('link Costa Azul from map goes to the description ', () => {
    
        cy.get('#surf-spot-costa-azul').click()
        .should('have.text', 'COSTA AZUL')
    })








    it('surf link The Rock goes to the map', () => {
    
        cy.get('a[href="https://magicseaweed.com/The-Rock-Surf-Guide/9042/"]')
        .should('have.text', ' Surf Forecast')


    })

    it('surf link Zippers goes to the map', () => {
    
        cy.get('a[href="https://magicseaweed.com/Zippers-Surf-Guide/9043/"]')
        .should('have.text', ' Surf Forecast')
    })

    it('surf link Costa azul goes to the map', () => {
    
        cy.get('a[href="https://magicseaweed.com/Costa-Azul-Surf-Guide/329/"]')
        .should('have.text', ' Surf Forecast')
    })







 
    
    








    // it('can fill in all fields and check boxes', () => {
    //     cy.contains('Fyll inn navn')
    //     .find('input[type=text]')
    //     .type('John Doe')

    //     cy.contains('Fyll inn telefonnummer')
    //     .find('input[type=tel]')
    //     .type('358')

    //     cy.contains('Fyll inn e-post')
    //     .find('input[type=email]')
    //     .type('av@gmail.com')

    //     cy.contains('Fyll inn selskapsnavn')
    //     .find('input[type=text]')
    //     .type('ERg')

    //     cy.get('[type=checkbox][name=" Support"]')
    //     .check()

    //     cy.get('[type=submit]')
    //     .click()

    //     cy.contains('Takk').should('be.visible')

    // }) 










    
    // it('can return staus code 201', () => {

    //     cy.intercept('**/formData').as('new-user')

        
    //     cy.get('[type=submit]')
    //     .click()

    //     // cy.wait('@new-user').should('have.property', 'statusCode', 201)

    //     cy.wait('@new-user').its('response.statusCode').should('eq',201)
    // }) 

})
context("HomePage", () => {
    it('loads Homepage correctly', () => {
        cy.visit('http://localhost:3000')

        cy.contains("Login")
        cy.contains("Cadastro")
        cy.contains("Buscar")
        cy.contains("Serviços")
    })

    it('login with a account correctly', () => {
        cy.get(".sc-hBMVcZ > :nth-child(1)").click()
        cy.get("#basic_email").type("alanPires@gmail.com")
        cy.get("#basic_password").type("@123456")
        cy.get(".ant-btn-primary > span").click()
    })

    it('profile button goes to profile', () => {
        cy.get(".div-usernavbar").click()
    })

    it('profile logout', () => {
        cy.get(":nth-child(5) > .sc-ArjOu").click()
    })

    it('login with a incorrect account have to appear message', () => {
        cy.get(".sc-hBMVcZ > :nth-child(1)").click()
        cy.get("#basic_email").type("alanPieres@gmail.com")
        cy.get("#basic_password").type("@123456")
        cy.get(".ant-btn-primary > span").click()
        cy.contains("request error")
    })

})
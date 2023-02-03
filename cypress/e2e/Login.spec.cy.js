const user = require("../fixtures/user.json")
describe("Login Test", () => {
  beforeEach(() => {
     cy.viewport(1300, 800)
    cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")
   
  })
//Test toàn bộ danh sách user

  
    // for (let i = 0; i < user.length; i++) {
    //   it("Login Test Success", () => {
    //   // cy.get("#UserName").type("delta4")
    // cy.findByPlaceholderText("Tài khoản").type(user[i].username)
    // cy.findByPlaceholderText("Mật khẩu").type(user[i].password)
    // cy.get("button").click()
    // cy.wait(500)
    // })
    
// }

it("Login Test Success", () => {
  // cy.get("#UserName").type("delta4")
cy.findByPlaceholderText("Tài khoản").type("delta4")
cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
cy.get("button").click()
cy.wait(500)
})

  it("Login Test Fail 1 - error username", () => {
    
    cy.findByPlaceholderText("Tài khoản").type("delta")
    cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
    cy.get("button").click()
    cy.get('.text-danger.alert.alert-danger.validation-summary-errors').contains('Tài khoản hoặc mật khẩu không chính xác')
    
  })
  it("Login Test Fail 2 - error pass", () => {
    
    cy.findByPlaceholderText("Tài khoản").type("delta4")
    cy.findByPlaceholderText("Mật khẩu").type("Vatco202")
    cy.wait(500)
    cy.get("button").click()
    cy.get('.text-danger.alert.alert-danger.validation-summary-errors').contains('Đăng nhập không hợp lệ')

    
  })
  it("Login Test fail 3 - username null ", () => {
    
  
    cy.findByPlaceholderText("Tài khoản").type(" ")
    cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
    cy.wait(500)
    cy.get("button").click()
    cy.get('.text-danger.alert.alert-danger.validation-summary-errors').contains('Tên đăng nhập và mật khẩu không được để trống')

    
  })
  it("Login Test fail 4 - pass null ", () => {
    
    
    cy.findByPlaceholderText("Tài khoản").type("delat4")
    cy.findByPlaceholderText("Mật khẩu").type(" ")
    cy.wait(500)
    cy.get("button").click()
  cy.get('.text-danger.alert.alert-danger.validation-summary-errors').contains('Tên đăng nhập và mật khẩu không được để trống')
    
  }) 
  it("Login Test fail 5 - pass null username null", () => {
        
    cy.findByPlaceholderText("Tài khoản").type(" ")
    cy.findByPlaceholderText("Mật khẩu").type(" ")
    cy.wait(500)
    cy.get("button").click()
    cy.get('.text-danger.alert.alert-danger.validation-summary-errors').contains('Tên đăng nhập và mật khẩu không được để trống')
    
  }) 
  it("Login Test fail 6 - error pass&user ", () => {
    
    
    cy.findByPlaceholderText("Tài khoản").type("delat")
    cy.findByPlaceholderText("Mật khẩu").type("Vatco2020 ")
    cy.wait(500)
    cy.get("button").click()
    cy.get('.text-danger.alert.alert-danger.validation-summary-errors').contains('Tài khoản hoặc mật khẩu không chính xác')
 
  }) 


})

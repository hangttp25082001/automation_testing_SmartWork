
describe("ADD a Project Test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024)
        cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")

    })
    it("Add success", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
        cy.get("[ng-click='add()']").click()
        //add project
        
        cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
        cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
        cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
        // nhập từ ngày
        cy.get('#FromTo').type('10/11/2022')
        cy.get('label.control-label.require.ng-binding').first().click()
        //nhập đến ngày
        cy.get('#DateTo').type('01/01/2023')
        cy.get('label.control-label.require.ng-binding').first().click()
       
        cy.get('[ng-model="model.CustomerCode"]').click()
        cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
        
        cy.get("[ng-click='submit()']").first().click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm dự án thành công')
       
    })
    it("Add fail 1 - no ID Project", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
        cy.get("[ng-click='add()']").click()
        //add project
        
        // cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
        cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
        cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
        // nhập từ ngày
        cy.get('#FromTo').type('10/11/2022')
        cy.get('label.control-label.require.ng-binding').first().click()
        //nhập đến ngày
        cy.get('#DateTo').type('01/01/2023')
        cy.get('label.control-label.require.ng-binding').first().click()
       
        cy.get('[ng-model="model.CustomerCode"]').click()
        cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
        
        cy.get("[ng-click='submit()']").first().click()
        cy.get('#ProjectCode-error').contains('Mã dự án không được để trống')
       
    })
    it("Add fail 2 - no name project", () => {
       //Login thành công
       cy.findByPlaceholderText("Tài khoản").type("delta4")
       cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
       cy.get("button").click()
       // cy.wait(500)
       // home
       
       cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
       
       cy.get("[ng-click='add()']").click()
       //add project
       
       cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
    //    cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
       cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
       // nhập từ ngày
       cy.get('#FromTo').type('10/11/2022')
       cy.get('label.control-label.require.ng-binding').first().click()
       //nhập đến ngày
       cy.get('#DateTo').type('01/01/2023')
       cy.get('label.control-label.require.ng-binding').first().click()
      
       cy.get('[ng-model="model.CustomerCode"]').click()
       cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
       
       cy.get("[ng-click='submit()']").first().click()
       cy.get('#ProjectTitle-error').contains('Tên dự án không được để trống')
       
    })
    it("Add fail 3 - no money", () => {
       //Login thành công
       cy.findByPlaceholderText("Tài khoản").type("delta4")
       cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
       cy.get("button").click()
       // cy.wait(500)
       // home
       
       cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
       
       cy.get("[ng-click='add()']").click()
       //add project
       
       cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
       cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
    //    cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
       // nhập từ ngày
       cy.get('#FromTo').type('10/11/2022')
       cy.get('label.control-label.require.ng-binding').first().click()
       //nhập đến ngày
       cy.get('#DateTo').type('01/01/2023')
       cy.get('label.control-label.require.ng-binding').first().click()
      
       cy.get('[ng-model="model.CustomerCode"]').click()
       cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
       
       cy.get("[ng-click='submit()']").first().click()
       cy.get("#Budget-error").contains('Số tiền không được để trống')
       
    })
    it("Add fail 4 - no startdate", () => {
      //Login thành công
      cy.findByPlaceholderText("Tài khoản").type("delta4")
      cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
      cy.get("button").click()
      // cy.wait(500)
      // home
      
      cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
      
      cy.get("[ng-click='add()']").click()
      //add project
      
      cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
      cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
      cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
    //   // nhập từ ngày
    //   cy.get('#FromTo').type('10/11/2022')
    //   cy.get('label.control-label.require.ng-binding').first().click()
      //nhập đến ngày
      cy.get('#DateTo').type('01/01/2023')
      cy.get('label.control-label.require.ng-binding').first().click()
     
      cy.get('[ng-model="model.CustomerCode"]').click()
      cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
      
      cy.get("[ng-click='submit()']").first().click()
      cy.get('#FromTo-error').contains('Từ ngày không được để trống')
       
    })
    it("Add fail 5 - no enddate", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
        cy.get("[ng-click='add()']").click()
        //add project
        
        cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
        cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
        cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
        // nhập từ ngày
        cy.get('#FromTo').type('10/11/2022')
        cy.get('label.control-label.require.ng-binding').first().click()
        //nhập đến ngày
        // cy.get('#DateTo').type('01/01/2023')
        // cy.get('label.control-label.require.ng-binding').first().click()
       
        cy.get('[ng-model="model.CustomerCode"]').click()
        cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
        
        cy.get("[ng-click='submit()']").first().click()
        cy.get('#DateTo-error').contains('Từ ngày không được để trống')
       
    })
    it("Add fail 6 - no KH", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
        cy.get("[ng-click='add()']").click()
        //add project
        
        cy.findByPlaceholderText("Mã dự án...").type('DA14112022')
        cy.get('[ng-model="model.ProjectTitle"]').type('Dự án thử nghiệm phần mềm')
        cy.findByPlaceholderText("Giá trị dự án...").type('1000000000000')
        // nhập từ ngày
        cy.get('#FromTo').type('10/11/2022')
        cy.get('label.control-label.require.ng-binding').first().click()
        //nhập đến ngày
        cy.get('#DateTo').type('01/01/2023')
        cy.get('label.control-label.require.ng-binding').first().click()
       
        // cy.get('[ng-model="model.CustomerCode"]').click()
        // cy.get('[role="listbox"]').get(".ui-select-choices-row-inner").first().click()
        
        cy.get("[ng-click='submit()']").first().click()
        cy.get('#errorCustomer').contains('Khách hàng yêu cầu bắt buộc!')
       
    })
})

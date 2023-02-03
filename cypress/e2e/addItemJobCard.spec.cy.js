describe("ADD a Item JobCard Test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024)
        cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")

    })
    it("Add success", () => {
         //Login thành công
         cy.findByPlaceholderText("Tài khoản").type("delta4")
         cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
         cy.get("button").click()
         // 
         // home
         
         cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
         cy.wait(2000)
        
        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //add item
        cy.wait(2000)

        cy.get(".ng-binding").eq(0).click()
        cy.findByPlaceholderText("Nhập đầu việc mới...").type("Test thử việc")
        cy.get('[ng-model="modelCheckList.WeightNum"]').type("20")
        cy.get("[ng-click='addCheckList()']").click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Cập nhật mô tả thành công')
    })
    it("Add fail - no item", () => {
         //Login thành công
         cy.findByPlaceholderText("Tài khoản").type("delta4")
         cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
         cy.get("button").click()
         // 
         // home
         
         cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
         cy.wait(2000)
        
        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //add item
        cy.wait(2000)
        cy.get(".ng-binding").eq(0).click()

        // cy.findByPlaceholderText("Nhập đầu việc mới...").type("Test thử việc")
        cy.get('[ng-model="modelCheckList.WeightNum"]').type("20")
        cy.get("[ng-click='addCheckList()']").click()

        cy.get('#Title-error').contains('Việc cần làm không được để trống')
    })
    it("Add fail - no number", () => {
         //Login thành công
         cy.findByPlaceholderText("Tài khoản").type("delta4")
         cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
         cy.get("button").click()
         // 
         // home
         
         cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
         cy.wait(2000)
        
        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //add item
        cy.wait(2000)

        cy.get(".ng-binding").eq(0).click()
        cy.findByPlaceholderText("Nhập đầu việc mới...").type("Test thử việc")
        // cy.get('[ng-model="modelCheckList.WeightNum"]').type("20")
        cy.get("[ng-click='addCheckList()']").click()

        cy.get('#Title-error').contains('Trọng số không được để trống')
    })
    it("Add fail - no anything", () => {
         //Login thành công
         cy.findByPlaceholderText("Tài khoản").type("delta4")
         cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
         cy.get("button").click()
         // 
         // home
         
         cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
         cy.wait(2000)
        
        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //add item
        cy.wait(2000)

        cy.get(".ng-binding").eq(0).click()
        // cy.findByPlaceholderText("Nhập đầu việc mới...").type("Test thử việc")
        // cy.get('[ng-model="modelCheckList.WeightNum"]').type("20")
        cy.get("[ng-click='addCheckList()']").click()
        cy.get('#Title-error').contains('Việc cần làm không được để trống')
    })

})
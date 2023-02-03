describe("ADD a JobCard Test", () => {
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
        // cy.get("#btnOpenTrello").click()
       
        // cy.get("li").first().       cy.get("a").click()
        // // cy.get("href:'/Admin/CardJob#!/'")
        // // cy.get("label.color-hyperlink.ng-binding").contains("Thẻ việc (")
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
        //add jobcard
        cy.get("#card_000000").type("Nhập thử thẻ việc 1")
        cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
       
        cy.get("[ng-show='!isAddedCard']").click()
        
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm thành công')
      
        // cy.get('.toast-message').wait(200).contains('Thêm thành công')
        
    })
    it("Add success", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // 
        // home
        // cy.get("#btnOpenTrello").click()
       
        // cy.get("li").first().       cy.get("a").click()
        // // cy.get("href:'/Admin/CardJob#!/'")
        // // cy.get("label.color-hyperlink.ng-binding").contains("Thẻ việc (")
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
       // chon bang viec
        cy.get('[ng-model="obj.Board"]').click()
        cy.get('.ui-select-choices-row-inner').contains('QA_Quý 4_2022').click()

        cy.get('[ng-model="obj.List"]').click()
        cy.get('.ui-select-choices-row-inner').contains('Kiểm thử').click()
         //add jobcard
        cy.get("#card_000000").type("Nhập thử thẻ việc 1")
        cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
       
        cy.get("[ng-show='!isAddedCard']").click()
        
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm thành công')
      
        // cy.get('.toast-message').wait(200).contains('Thêm thành công')
        
    })
    
    it("Add fail 1 - no title ", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
    
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
        //add jobcard
        // cy.get("#card_000000").type("Nhập thử thẻ việc")
        cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
       
        cy.get("[ng-show='!isAddedCard']").click()
        cy.get('.toast-message').wait(200).contains('Vui lòng nhập tên thẻ việc')
        cy.wait(500)
        
    })
    it("Add fail 2 - clear title ", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
    
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
        //add jobcard
        cy.get("#card_000000").type("Nhập thử thẻ việc").clear()
        
        cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
       
        cy.get("[ng-show='!isAddedCard']").click()
        cy.get('.toast-message').wait(200).contains('Vui lòng nhập tên thẻ việc')
        cy.wait(500)
        
    })
    it("Add fail 3 - no end time ", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
     
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
        //add jobcard
        cy.get("#card_000000").type("Nhập thử thẻ việc")
        // cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
        
        cy.get("[ng-show='!isAddedCard']").click()
        cy.get('#Deadline-error').contains('Ngày kế hoạch kết thúc không được bỏ trống')
        cy.wait(500)
    })
    it("Add fail 4 - no title no end time ", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
        //add jobcard
        // cy.get("#card_000000").type("Nhập thử thẻ việc")
        // cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
        
        cy.get("[ng-show='!isAddedCard']").click()
        cy.get('#Deadline-error').contains('Ngày kế hoạch kết thúc không được bỏ trống')
        cy.wait(500)
    })

    it("Add fail 5 - no DM CV", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // 
        // home
        // cy.get("#btnOpenTrello").click()
       
        // cy.get("li").first().       cy.get("a").click()
        // // cy.get("href:'/Admin/CardJob#!/'")
        // // cy.get("label.color-hyperlink.ng-binding").contains("Thẻ việc (")
        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.get(".text-center.pr-2").eq(1).click()
       // chon bang viec
        cy.get('[ng-model="obj.Board"]').click()
        cy.get('.ui-select-choices-row-inner').contains('QA_Quý 4_2022').click()

        // cy.get('[ng-model="obj.List"]').click()
        // cy.get('.ui-select-choices-row-inner').contains('Kiểm thử').click()
         //add jobcard
        cy.get("#card_000000").type("Nhập thử thẻ việc 1")
        cy.findByPlaceholderText("Kế hoạch kết thúc...").type("01/01/2023")
       
        cy.get("[ng-show='!isAddedCard']").click()
        
        cy.wait(3000)
        cy.get('.toast-message').contains('Vui lòng chọn danh mục công việc')
      
        // cy.get('.toast-message').wait(200).contains('Thêm thành công')
        
    })
})

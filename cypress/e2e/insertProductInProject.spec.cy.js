describe("Add a Product in Project Test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024)
        cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")

    })
    it("ADD success", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(2000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm thành công')

        // Save form input
        cy.get('[ng-click="submit()"]').eq(0).click()  
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm phiếu thành công')

    })
    it("ADD Fail 1 - no product", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        // cy.get('[ng-model="modelDetail.ProductCode"]').click()
        // cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        // cy.findByPlaceholderText('Số lượng...').type('1000')
        // cy.get('[name="Cost"]').type('500000000')
        // cy.get('[ng-click="addDetail()"]').click()
        // cy.wait(2000)

        // Save form input
        cy.get('[ng-click="submit()"]').eq(0).click()    
        cy.wait(3000)
        cy.get('.toast-message').contains('Vui lòng nhập ít nhất 1 chi tiết')   
    })
    it("ADD Fail 2 - no name Product", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(2000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        // cy.get('[ng-model="modelDetail.ProductCode"]').click()
        // cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.wait(5000)
        cy.get('[ng-show="errorProductCode"]').contains('Sản phẩm không được để trống')

        // // Save form input
        // cy.get('[ng-click="submit()"]').eq(0).click()       
    })
    it("ADD Fail 3 - no SL", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        // cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.get('[ng-show="errorQuantity"]').contains('Số lượng phải là số dương nhỏ hơn 100000')

        // Save form input
        // cy.get('[ng-click="submit()"]').eq(0).click()       
    })
    it("ADD Fail 4 - SL >100000", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('10000000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.get('[ng-show="errorQuantity"]').contains('Số lượng phải là số dương nhỏ hơn 100000')

        // Save form input
        // cy.get('[ng-click="submit()"]').eq(0).click()       
    })
    it("ADD Fail 5 - no money", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        // cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.get('[ng-show="errorTotal"]').contains('Số tiền phải là số dương')

        // Save form input
        // cy.get('[ng-click="submit()"]').eq(0).click()       
    })
    it("ADD Fail 6 - clear money", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').clear()
        cy.get('[ng-click="addDetail()"]').click()
        cy.get('[ng-show="errorTotal"]').contains('Số tiền phải là số dương')

        // Save form input
        // cy.get('[ng-click="submit()"]').eq(0).click()       
    })
    
    it("ADD Fail 7 - no title", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        // cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.wait(2000)

        // Save form input
        cy.get('[ng-click="submit()"]').eq(0).click() 
        cy.get('#Title-error').contains('Tiêu đề phiếu không được để trống')      
    })
    it("ADD Fail 8 - no loại phiếu", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()
        cy.get('[ng-disabled="listProdDetail.length > 0"]').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()

        cy.get('[ng-show="errorPortType"]').contains('Loại phiếu không được để trống')

        // Save form input
        // cy.get('[ng-click="submit()"]').eq(0).click()       
    })
    it("ADD Fail 9 - no Reciever", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(2000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        // cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.wait(5000)

        // Save form input
        cy.get('[ng-click="submit()"]').eq(0).click()  
        cy.get('#Receiver-error').contains('Người nhận không được để trống')     
    })
    it("ADD Fail 10 - no sender", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
      
        cy.visit("https://dieuhanh.vatco.vn/Admin/Project#!/")
        
       cy.wait(5000)
         //chọn DA
         cy.get('tr.ng-scope.odd').first().dblclick()
        //choose product

        cy.get('[ng-click="chkProject()"]').click()
        // click add
        cy.get('.mr10.pr-0.text-center').eq(2).click()
        cy.wait(5000)
        //add a form input
        cy.get('[ng-model="model.Title"]').first().type('Nhập hàng bổ sung 14/11/2022')
        cy.get('[ng-model="model.TicketTime"]').clear().type('15/11/2022')
        cy.get('i.fa.fa-plus-circle.icon-insert').click()

        cy.findByPlaceholderText('Người nhận...').type('Phạm Thị Thanh Hằng')
        // cy.findByPlaceholderText('Người gửi...').type('Phan Duy Dương')

        //add a product
        cy.get('[ng-model="modelDetail.ProductCode"]').click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-26-0').click()
        cy.findByPlaceholderText('Số lượng...').type('1000')
        cy.get('[name="Cost"]').type('500000000')
        cy.get('[ng-click="addDetail()"]').click()
        cy.wait(5000)

        // Save form input
        cy.get('[ng-click="submit()"]').eq(0).click()     
        cy.get('#Sender-error').contains('Người gửi không được để trống')     

    })
})
describe("ADD a User Test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024)
        cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")

    })
    it("Add success", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm thành công')
        cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")
         //Login thành công
         cy.findByPlaceholderText("Tài khoản").type("test123")
         cy.findByPlaceholderText("Mật khẩu").type("test@123")
         cy.get("button").click()
         cy.wait(3000)
        cy.get('.toast-message').contains('Thêm thành công')


    })
    it("Add fail 1 - no nameuser", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        // cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('#UserName-error').contains('Tên tài khoản không được để trống')

    })
    it("Add fail 2 - no password", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        // cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('#password-field-error').contains('Mật khẩu không được để trống')

    })
    it("Add fail 3 - no fullname", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        // cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('#GivenName-error').contains('Họ và tên không được để trống')

    })
    it("Add fail 4 - null CN", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        // cy.get('[ng-model="model.BranchId"]').first().click()
        // cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('[ng-show="errorBranch"]').contains('Chi nhánh không được để trống')

    })
    it("Add fail 5 - null PB", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        // cy.get('[ng-model="model.DepartmentId"]').first().click()
        // cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('[ng-show="errorDepartment"]').contains('Phòng ban/Bộ phận không được để trống')

    })
    it("Add fail 6 - null VT", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
    //    cy.get('[ng-model="model.RoleId"]').first().click()
    //     cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('[ng-show="errorRoleId"]').contains('Vai trò không được để trống')

    })
    it("Add fail 7 - SDT >11", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()
        //SDT error
        cy.get('[ng-model="model.PhoneNumber"]').type('0123456789111')

        cy.get('[ng-click="submit()"]').first().click()
        cy.wait(3000)
        cy.get('#PhoneNumber-error').contains('Số điện thoại sai định dạng!')

    })
    it("Add fail 8 - SDT -String", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("dao_bgd")
        cy.findByPlaceholderText("Mật khẩu").type("Dao@123")
        cy.get("button").click()
        // cy.wait(500)
        // home
        cy.get('[data-target="#system"]').click()
        cy.get('li.pull-left.pl-3').first().click()
        cy.get('[ng-click="add()"]').click()

        //add a user
        cy.get('[name="UserName"]').first().type('test123').should('have.value', 'test123')
        cy.findByPlaceholderText('Nhập mật khẩu...').type('test@123')
        cy.get('[ng-model="model.GivenName"]').first().type('Thanh Hằng')
        //chọn CN
        cy.get('[ng-model="model.BranchId"]').first().click()
        cy.get('[role="listbox"]').get('#ui-select-choices-row-6-1').click()
        //Chọn PB
        cy.get('[ng-model="model.DepartmentId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(3).click()
       // chọn vai trò
       cy.get('[ng-model="model.RoleId"]').first().click()
        cy.get('[role="listbox"]').get('.ui-select-choices-row-inner').eq(0).click()
        cy.get('[ng-model="model.PhoneNumber"]').type('aaaaaaa')

        cy.get('[ng-click="submit()"]').first().click()

        cy.wait(3000)
        cy.get('#PhoneNumber-error').contains('Số điện thoại sai định dạng!')


    })


    
    

})
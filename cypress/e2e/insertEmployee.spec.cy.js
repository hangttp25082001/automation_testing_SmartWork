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
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Hồng Hạnh")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("01701100502")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.wait(4000)
        cy.get('.toast-message').contains('Thêm nhân viên thành công')
    })


    it("Add fail 1 - no name", () => {
       //Login thành công
       cy.findByPlaceholderText("Tài khoản").type("delta4")
       cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
       cy.get("button").click()
       // cy.wait(500)
       // home
       
       cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
    cy.viewport(1920, 1024)
       
       cy.get("[ng-if='showFunctionHr.Insert']").click()
       //add Employee
       
    //    cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
       
       cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
       //click vào GT
       cy.get("[ng-model='model.gender']").click()
       cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
      
       cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
       cy.get('i.fas.fa-passport').click()
       cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
       //click vào TT
       cy.get('[ng-model="model.status"]').click()
       cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
       
       //click vào PB
       cy.get('[ng-model="model.unit"]').click()
       cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
       
       
       cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
       cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
      
       cy.get("[ng-click='submit()']").click()
        cy.get('#fullname-error').contains('Yêu cầu nhập họ và tên.')
    })
    it("Add fail 2 - no experinece years", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        cy.viewport(1920, 1024)
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").clear()
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        
        cy.get('#years_of_exp-error').contains('Yêu cầu nhập số năm kinh nghiệm')
    })
    it("Add fail 3 - no GT", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        // cy.get("[ng-model='model.gender']").click()
        // cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('[ng-show="errorGender"]').contains('Yêu cầu nhập giới tính')
    })
    it("Add fail 4 - no NS", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        // cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        // cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('#inputDate-error').contains('Yêu cầu nhập ngày sinh.')
       
    })
    it("Add fail 5 - no CMT", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        // cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("038301007507")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        
        cy.get('#identitycard-error').contains('Yêu cầu nhập CMT/Hộ chiếu')
    })
    it("Add fail 6 - no TT", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        // cy.get('[ng-model="model.status"]').click()
        // cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('[ng-show="errorstatus"]').contains('Trạng thái không được bỏ trống')
       
    })
    it("Add fail 7 - no PB", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        // cy.get('[ng-model="model.unit"]').click()
        // cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('[ng-show="errorUnit"]').contains('Yêu cầu nhập phòng ban')
       
    })
    it("Add fail 8 - no HK", () => {
       //Login thành công
       cy.findByPlaceholderText("Tài khoản").type("delta4")
       cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
       cy.get("button").click()
       // cy.wait(500)
       // home
       
       cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
       
       cy.get("[ng-if='showFunctionHr.Insert']").click()
       //add Employee
       
       cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
       
       cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
       //click vào GT
       cy.get("[ng-model='model.gender']").click()
       cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
      
       cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
       cy.get('i.fas.fa-passport').click()
       cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
       //click vào TT
       cy.get('[ng-model="model.status"]').click()
       cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
       
       //click vào PB
       cy.get('[ng-model="model.unit"]').click()
       cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
       
       
    //    cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
       cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
      
       cy.get("[ng-click='submit()']").click()
       cy.get('#permanentresidence-error').contains('Yêu cầu nhập hộ khẩu thường trú.')
       
    })
    it("Add fail 9 - no SĐT", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        // cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('#idPhone-error').contains('Yêu cầu nhập số điện thoại.')
       
    })
    it("Add fail 10 - SDT >11", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("01234567891")
       
        cy.get("[ng-click='submit()']").click()
        cy.wait(5000)
        cy.get('#idPhone-error').contains('Số điện thoại sai định dạng')
       
    })
    it("Add fail 11 - SDT string", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("hhhfscdz")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('#idPhone-error').contains('Số điện thoại sai định dạng')
    })
    it("Add fail 12 - SDT <10", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("000000001212")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("01234567")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('#idPhone-error').contains('Số điện thoại sai định dạng')
       
    })
    it("Add fail 13 - CMT >12 ", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("038301007507111")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('#identitycard-error').contains('CMT/Hộ chiếu sai định dạng')
    })
    it("Add fail 14 - CMT error", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()
        // cy.wait(500)
        // home
        
        cy.visit("https://dieuhanh.vatco.vn/Admin/HREmployee#!/")
        
        cy.get("[ng-if='showFunctionHr.Insert']").click()
        //add Employee
        
        cy.get('[name="fullname"]').type("Phạm Thị Thanh Hằng")
        
        cy.findByPlaceholderText("Số năm kinh nghiệm").type("1")
        //click vào GT
        cy.get("[ng-model='model.gender']").click()
        cy.get("[role='listbox']").get('#ui-select-choices-row-5-1').click()
       
        cy.findByPlaceholderText("Nhập ngày sinh...").type("25/08/2001")
        cy.get('i.fas.fa-passport').click()
        cy.findByPlaceholderText("Nhập CMT/Hộ CHiếu").type("AAAAAAAAA")
        //click vào TT
        cy.get('[ng-model="model.status"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').first().click()
        
        //click vào PB
        cy.get('[ng-model="model.unit"]').click()
        cy.get("[role='listbox']").get('a.ui-select-choices-row-inner').eq(7).click()
        
        
        cy.get('[ng-model="model.permanentresidence"]').click().type("Thanh Hóa")
        cy.findByPlaceholderText("Số điện thoại...").type("0123456789")
       
        cy.get("[ng-click='submit()']").click()
        cy.get('#identitycard-error').contains('CMT/Hộ chiếu sai định dạng')
    })
    
})
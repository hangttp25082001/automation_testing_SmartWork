
describe("Report working Test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024)
        cy.visit("https://dieuhanh.vatco.vn/Admin%2FAccount/Login")

    })
    it("Report success", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()

        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.wait(5000)

        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //choose report
        cy.wait(5000)
        cy.get('[ng-click="viewTab(7)"]').wait(2000).click()
        cy.wait(5000)
        cy.get('[ng-model="x.Staff"]').first().wait(2000).type("1")

        cy.get("[ng-click='submit()']").click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Thêm thành công')
    })
    it("Report fail 1 - no number", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()

        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.wait(5000)

        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //choose report
        cy.wait(5000)
        cy.get('[ng-click="viewTab(7)"]').wait(2000).click()
        cy.wait(5000)
        // cy.get('[ng-model="x.Staff"]').first().wait(2000).type("1")

        cy.get("[ng-click='submit()']").click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Vui lòng kiểm tra lại dữ liệu báo cáo hoặc duyệt tiến độ')
    })
    it("Report fail 2 -  number >100", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()

        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.wait(5000)

        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //choose report
        cy.wait(5000)
        cy.get('[ng-click="viewTab(7)"]').wait(2000).click()
        cy.wait(5000)
        cy.get('[ng-model="x.Staff"]').first().wait(2000).type("1000")

        cy.get("[ng-click='submit()']").click()
        cy.wait(3000)
        cy.get('.toast-message').contains('Vui lòng kiểm tra lại dữ liệu báo cáo hoặc duyệt tiến độ')
    })
    it("Report fail 3 -  date in future", () => {
        //Login thành công
        cy.findByPlaceholderText("Tài khoản").type("delta4")
        cy.findByPlaceholderText("Mật khẩu").type("Vatco2021")
        cy.get("button").click()

        cy.visit("https://dieuhanh.vatco.vn/Admin/CardJob#!/")
        cy.wait(5000)

        //chọn thẻ việc
        cy.get('td.nowrap.first-col-sticky').first().dblclick()
        //choose report
        cy.wait(5000)
        cy.get('[ng-click="viewTab(7)"]').wait(2000).click()
        cy.wait(5000)
        cy.get('[name="sessionTime"]').clear().type('01/10/2023')
        

        cy.get('[ng-model="x.Staff"]').first().wait(2000).type("1")
        cy.get('[name="sessionTime"]').clear().type('01/10/2023')
        cy.get("[ng-click='submit()']").click()
        cy.wait(3000)

        cy.get('span').contains('Thời gian vượt quá kế hoạch kết thúc thẻ việc')
    })
})
class addpatient
{
    get clickhere()
    {
        return $("//a[@href='hms/doctor/']")
    }
    get usn()
    {
        return $('[name="username"]')
    }
    get passwrd()
    {
        return $('[name="password"]')
    }
    get submit()
    {
        return $("//button[@type='submit']")
    }
    get addpat()
    {
        return $("//div[@class='item-inner']/span[.=' Patients ']")
    }
    get patttt()
    {
        return $("//span[normalize-space()='Add Patient']/ancestor::a/span")
    }
    get pname()
    {
        return $('[name="patname"]')
    }
    get pcontact()
    {
        return $('[name="patcontact"]')
    }
    get email()
    {
        return $('#patemail')
    }
    get radio()
    {
        return $("//label[@for='rg-female']")
    }
    get radioM()
    {
        return $("//label[@for='rg-male']")
    }
    get paddress()
    {
        return $('[name="pataddress"]')
    }
    get page()
    {
        return $('[name="patage"]')
    }
    get medhistory()
    {
        return $('[name="medhis"]')
    }
    get adddetails()
    {
        return $('#submit')
    }
    async add(user,security,pnm,contact,mail,address,age,history)
    {
        await this.clickhere.click()
        await this.usn.setValue(user)
        await this.passwrd.setValue(security)
        await this.submit.click()
        await this.addpat.click()
        await browser.pause(4000)
        await this.patttt.click()
        await this.pname.setValue(pnm)
        await this.pcontact.setValue(contact)
        await this.email.setValue(mail)
        await this.radioM.click()
        await this.paddress.setValue(address)
        await this.page.setValue(age)
        await this.medhistory.setValue(history)
        await browser.pause(10000)
        //await this.radio.click()
        await this.adddetails.click()
    }
}
export default new addpatient()

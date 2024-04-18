class adddoctor
{
    get doc()
    {
        return $("//div [@class='item-inner']//span[.= ' Doctors ']")
       
    }
    get addD()
    {
        return $("//span[.= ' Add Doctor']")
    }
    get specification()
    {
        return $('[name="Doctorspecialization"]');
    }
    get dname()
    {
        return $('[name="docname"]')  
    }
    get clinicadd()
    {
        return $('[name="clinicaddress"]')
    }
    get fee()
    {
        return $('[name="docfees"]')
    }
    get dphnno()
    {
        return $('[name="doccontact"]')
    }
    get email()
    {
        return $("//input[@id='docemail']")
    }
    get pwd()
    {
        return $("//input[@placeholder='New Password']")
    }
    get cpwd()
    {
        return $("//input[@placeholder='Confirm Password']")
    }
    get submit()
    {
        return $('#submit')
    }

    async bb(txt,dtrname,caddress,feee,phno,mail,pswd,confpwd)
    {
        await this.doc.click()
        await this.addD.click()
        await this.specification.selectByVisibleText(txt)
        await this.dname.setValue(dtrname)
        await this.clinicadd.setValue(caddress)
        await this.fee.setValue(feee)
        await this.dphnno.setValue(phno)
        await this.email.setValue(mail)
        await this.pwd.setValue(pswd)
        await this.cpwd.setValue(confpwd)
        await this.submit.click()
    }
}
export default new adddoctor()
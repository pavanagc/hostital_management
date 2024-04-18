class patientlog{
     get clickhere()
     {
        return $("//a[@href='hms/user-login.php']")
     }
     get crtacc()
     {
        return $("//a[@href='registration.php']")
     }
     get name()
     {
        return $('[name="full_name"]')
     }
     get address()
     {
        return $('[name="address"]')
     }
     get city()
     {
        return $('[name="city"]')
     }
     get female()
     {
        return $('//label[@for="rg-female"]')
     }
     get male()
     {
        return $('for="rg-male"')
     }
     get mail()
     {
        return $('#email')
     }
     get pwd()
     {
        return $('#password')
     }
     get cowd()
     {
        return $('#password_again')
     }
     get submit()
     {
        return $('#submit')
     }
     get login()
     {
        return $("//a[@href='user-login.php']")
     }
     get usr()
     {
        return $('[name="username"]')
     }
     get passwd()
     {
        return $('[name="password"]')
     }
     get sub()
     {
        return $('[name="submit"]')
     }
    
     async fill(nm,addy,cityy)
     {
        await this.clickhere.click()
        await this.crtacc.click()
        await this.name.setValue(nm)
        await this.address.setValue(addy)
        await this.city.setValue(cityy)
        
     }
     async fillpwd(mailid,pass,cpass)
     {
        await this.mail.setValue(mailid)
        await this.pwd.setValue(pass)
        await this.cowd.setValue(cpass)
        await this.submit.click()
        await this.login.click()
     }
     async log(user,passwd)
     {
        await this.usr.setValue(user)
        await this.passwd.setValue(passwd)
        await this.sub.click()
     }
}
export default new patientlog()
class bookrooms{
    get register()
    {
        return $('//a[@href="./auth/register.php"]')
    }
    get fullname()
    {
        return $('#fullname')
    }
    get usernm(){
        return $('#username')
    }
    get mob(){
        return $('#mobile')
    }
    get email()
    {
        return $('#email')
    }
    get passwd()
    {
        return $('#password')
    }
    get cpasswd()
    {
        return $('#c_password')
    }
    get submit()
    {
        return $('[name="register"]')
    }
    get loginnnn()
    {
        return $("//a[@href='login.php']")
    }
    get mainlogin()
    {
        return $("//a[@href='./auth/login.php']")
    }
    get home()
    {
        return $('//a[@href="./auth/register.php"]')
    }
    get usn()
    {
        return $('#exampleInputEmail1')
    }
    get pwd()
    {
        return $('#exampleInputPassword1')
    }
    get sub()
    {
        return $('[class="btn btn-primary"]')
    }
    get keywords()
    {
        return $('[class="form-control"]')
    }
    get location()
    {
        return $('#location')
    }
    get search()
    {
        return $("//button[@name='search']")
    }
    get listofresult()
    {
        return $$("//div[@class='alert alert-success']")
    }
     async opn(fullname,usrnm,mobnum,mail,pass,cpass)
    {
       // await this.home.click()
        await this.register.click()
        await this.fullname.setValue(fullname)
        await this.usernm.setValue(usrnm)
        await this.mob.setValue(mobnum)
        await this.email.setValue(mail)
        await this.passwd.setValue(pass)
        await this.cpasswd.setValue(cpass)
        await this.submit.click()
    }
    async login(usrn,ppwd)
    {
        await this.mainlogin.click()
        await this.usn.setValue(usrn)
        await this.pwd.setValue(ppwd)
        await this.sub.click()
    }
    async searchhhh(keyy,loc)
    {
        await this.keywords.scrollIntoView()
        await this.keywords.setValue(keyy)
        await this.location.setValue(loc)
        await this.search.click()
    }
    
}
export default new bookrooms()
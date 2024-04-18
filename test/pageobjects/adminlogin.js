class logpage
{
 get usernameTf()
 {
    return $('[name="username"]')
    
 }
    get passwordTf()
    {
        return $('[name="password"]')
    }
    get loginbtn()
    {
        return $('[name="submit"]')
    }
 
    async loginactn(usn,pwd)
    {
        await this.usernameTf.setValue(usn)
        await this.passwordTf.setValue(pwd)
        await this.loginbtn.click()
        
    }
}
export default new logpage()
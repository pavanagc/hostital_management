class doctor{
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
    get app()
    {
        return $("//a[@href='appointment-history.php'][1]")
    }
    /*------------get table and evaluate------------*/
    get table()
    {
        // return $("//table[@id='sample-table-1']/tbody/tr[1]")
        return $$("//table[@id='sample-table-1']/tbody/tr/td[2]")
    }
    async doc(usernm,pwdd)
    {
        await this.clickhere.click()
        await this.usn.setValue(usernm)
        await this.passwrd.setValue(pwdd)
        await this.submit.click()
        await this.app.click()
        

    }
}
export default new doctor()
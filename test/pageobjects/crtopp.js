class appointment{
    get book()
    {
        return $("//a[@href='book-appointment.php'][1]")
    }
    get docsp()
    {
        return $('[name="Doctorspecialization"]')
    }
    get dtr()
    {
        return $('[name="doctor"]')
    }
    get date()
    {
        return $('[name="appdate"]')
    }
    get t()
    {
        return $('#timepicker1')
    }
    get time()
    {
        return $('[class="bootstrap-timepicker-hour form-control"]')
    }
    get min()
    {
        return $('[class="bootstrap-timepicker-minute form-control"]')
    }
    get ampm()
    {
        return $('[class="bootstrap-timepicker-meridian form-control"]')
    }
    get submit()
    {
        return $('[name="submit"]')
    }
    async crt(psyco,dname1,hr,min,ap,date)
    {
        await this.book.click()
        await this.docsp.selectByVisibleText(psyco)
        await this.dtr.selectByVisibleText(dname1)
        await this.t.click()
        await this.time.setValue(hr)
        await browser.pause(1000);
        await this.min.setValue(min)
        await browser.pause(1000);
        await this.ampm.setValue(ap)
        await this.date.setValue(date)
        // await browser.$("//th[.='April 2024']/ancestor::div[@class='datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-bottom']/descendant::td[.='17']") //dynamic xpath
       await browser.pause(5000);
       await this.submit.click()
    }
}
export default new appointment()
describe('',()=>{
    it('',async()=>{
        await browser.url('http://rmgtestingserver/domain/Hospital_Management_System/hms/doctor/add-patient.php')
        await browser.$("//input[@id='rg-male']").click()
        await browser.pause(5000)
    })
})
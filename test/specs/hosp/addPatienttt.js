import addPatient from "../../pageobjects/addPatient.js"
describe('hospical',()=>{
    it('doclogin',async()=>{
        await browser.url('http://rmgtestingserver/domain/Hospital_Management_System/')
        await browser.maximizeWindow()
        await addPatient.add("narayanaaa1@gmail.com", "Dr.reddy",'sagar','0987654321','sagar12134@gmail.com','maddur',22,'caugh and dust allergy')

        await browser.pause(3000)
        
    })})
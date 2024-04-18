import patientlogin from "../../pageobjects/patientlogin.js"
import crtopp from "../../pageobjects/crtopp.js"

describe('patient',()=>{
    let ran= Math.floor(Math.random()*100+1)
    it('patient',async()=>{
        await browser.url('http://rmgtestingserver/domain/Hospital_Management_System/')
        await browser.pause(2000)
        await patientlogin.fill('geeta2','8th cross, bangalore','bangalore')
        await patientlogin.female.click()
        
        await patientlogin.fillpwd(`gggggg${ran}@gmail.com`, 'geetaa','geetaa')
        await browser.pause(2000)
       // await browser.acceptAlert()
        
    })
    it('loginP',async()=>{
        await patientlogin.log(`gggggg${ran}@gmail.com`,'geetaa')
        await browser.pause(2000)
    })
    it('appointment',async()=>{
        await crtopp.crt('Dentist','narayanaa',5,45,'pm',"2024-11-23")
        await browser.pause(5000)
        // let text = "April 2024";
        // let date = 10;
        //await browser.$("//th[.='"+text+"']/ancestor::div[@class='datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-bottom']/descendant::td[.='"+date+"']") //dynamic xpath
       
    })
})
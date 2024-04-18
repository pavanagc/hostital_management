import adminlogin from "../../pageobjects/adminlogin.js";
import adddtr from "../../pageobjects/adddtr.js";

describe('hospital',()=>{
   
    //let docran=Math.floor(Math.random()*10+2)
    it('login',async()=>{
        await browser.url('http://rmgtestingserver/domain/Hospital_Management_System/hms/admin/index.php')
        await adminlogin.loginactn('admin','Test@12345')
        await browser.pause(4000)
    } )
    it('add_doctor',async()=>{
        let mailid=`narayanaaa1@gmail.com`
        let password='Dr.reddy'
        await adddtr.bb('Dentist','narayanaa','3rd block,bangalore',300,1234567890,mailid,password,password)
        await browser.pause(2000)
        await browser.acceptAlert()
        // await browser.back() 
    })
   
    
})


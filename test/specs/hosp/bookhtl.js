import rooms from "../../pageobjects/rooms.js"
describe('',()=>{
    it('',async()=>{
        await browser.url('http://rmgtestingserver/domain/House_Rental_Application/')
        //await rooms.opn('gowindanarayana','gowninda','2223334441','gowinda@gmail.com','gowinda@123','gowinda@123')
        //await browser.pause(8000)
        await rooms.login('gowinda@gmail.com','gowinda@123')
        await browser.pause(8000)
    })
    it('',async()=>{
        await browser.url('http://rmgtestingserver/domain/House_Rental_Application/')
        await rooms.searchhhh('rent','bangalore')
        await browser.pause(8000)
        let alllist=await rooms.listofresult.map(ele=>ele.getText())
        //console.log(alllist);
        if(alllist.includes(''))
    })
})
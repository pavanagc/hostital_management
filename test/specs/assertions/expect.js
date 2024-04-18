import { expect } from "chai";
describe('assertion',()=>{
    it('expect',()=>{
        expect(10).to.be.a('number')
    })
    it('months',async()=>{
        await browser.url('https://www.facebook.com/')
        await browser.pause(2000)
        await browser.$("//a[.='Create new account']").click()
        await browser.pause(2000)
        let monthss=await browser.$$('#month').map(ele=>ele.getText())
        //let mon=await monthss.map(ele=>ele.getText())
        await browser.pause(2000)
         console.log(monthss);
        let mnth= monthss.toString()
        let mon = mnth.split('\n')
        console.log(mon);
        expect(mon).have.been.a('array').that.includes('Jan')
    })
})
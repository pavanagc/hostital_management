import dtr from "../../pageobjects/dtr.js"

describe('hospical',()=>{
it('doclogin',async()=>{
    await browser.url('http://rmgtestingserver/domain/Hospital_Management_System/')
    await browser.maximizeWindow()
    await dtr.doc("narayanaaa1@gmail.com", "Dr.reddy")
    await browser.pause(2000)
    var nameofp =await dtr.table.map(ele=>ele.getText())
    console.log(nameofp);
    if(nameofp.includes('geeta2'))
    {
    await $$("//table[@id='sample-table-1']/tbody/tr/td/div/a").map(ele=>ele.click())
    await browser.getAlertText()
    await browser.acceptAlert()
    }
    else
    {
    console.log('bad');
    }

    await browser.pause(10000)

    //table[@id='sample-table-1']/tbody/tr/td/div/a"

    //table[@id='sample-table-1']/tbody/tr[last()]/td[last()]

})
})
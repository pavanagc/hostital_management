describe('sample',()=>{
    it('fb',async()=>{
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)
        await browser.$('#email').setValue('pavana@gmail.com')
        await browser.pause(2000)
        await browser.$('#pppppass').setValue('12345678')
        await browser.pause(2000)
        await browser.$('[name="login"]').click()
        await browser.pause(2000) 
    })
})
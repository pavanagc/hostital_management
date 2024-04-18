class cake{
    get all()
    {
       // return $$("//div[@class='row no-margin ']")
    }
    async ex()
    {
        await browser.url('https://www.igp.com/birthday-cakes')
       let allcakes= await browser.$$("//div[@class='row no-margin ']")
       await allcakes.map(async(ele)=>{
        await console.log( ele.getText());
       
       })
    }
}
export default new cake()
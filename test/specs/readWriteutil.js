import { readdata,writedataoneworksheet, writedatatosamesheet } from "../../generic_utilities/readand.js";
describe('datafromexcelutility',()=>{
    let filepath='./test/testData/first.xlsx'
    it('data',async ()=>{
        let data=await readdata(filepath,'Sheet1',1,1)
        console.log((data));

        await writedataoneworksheet(filepath,'Sheet22',1,1,'SDET52')
        //await writedatatosamesheet()
    })
})
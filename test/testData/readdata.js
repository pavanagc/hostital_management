import excel from "exceljs"
describe('read data',()=>{
    it('read from excel',async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile('./test/testData/first.xlsx')
        const sheet=book.getWorksheet('Sheet1')
        const data=sheet.getRow(1).getCell(1).toString()
        console.log(`$$$$$$$$$$ ${data}`);
    })
})
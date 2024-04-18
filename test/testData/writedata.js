import excel from "exceljs"
describe('enter',()=>{
    it('write to excel',async()=>{
        const boook=new excel.Workbook()
        await boook.xlsx.readFile('./test/testData/first.xlsx')
       // const sheet=boook.addWorksheet('Sheet2')
       const sheet=boook.getWorksheet('Sheet2')
       // boook.removeWorksheet('Sheet111')
        sheet.getRow(1).getCell(1).value='hello smarty'
        await boook.xlsx.writeFile('./test/testData/first.xlsx')
    })
}) 
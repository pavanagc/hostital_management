import excel from 'exceljs'

export async function readdata(filepath, sheetName, rownum, celnum)
{
    const Workbook=new excel.Workbook()
    await Workbook.xlsx.readFile(filepath);

    const worksheet=Workbook.getWorksheet(sheetName)
    let data=worksheet.getRow(rownum).getCell(celnum).toString()
    return data
}
export async function writedataoneworksheet(filepath, sheetName,rowno,celno,entervalue)
{
    const Workbook=new excel.Workbook()
    await Workbook.xlsx.readFile(filepath)

    const worksheet=Workbook.addWorksheet(sheetName)
    worksheet.addRow(rowno).getCell(celno).value=entervalue
    await Workbook.xlsx.writeFile(filepath)
}
export async function writedatatosamesheet(filepath,sheetName,rowno,celno,entervalue)
{
    const Workbook=new excel.Workbook()
    await Workbook.xlsx.readFile(filepath)

    const worksheet=Workbook.getWorksheet(sheetName)
    worksheet.addRow(rowno).getCell(celno).value=entervalue

    await Workbook.xlsx.writeFile(filepath)
}
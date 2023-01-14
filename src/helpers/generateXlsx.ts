import { utils, writeFile } from "xlsx"

export const generateXLSX = (tableHTML: any, nameToFile: string) => {
    const workbook = utils.table_to_book(tableHTML, {
        raw: true,
    });
    writeFile(workbook, `${nameToFile}.xlsx`);
}
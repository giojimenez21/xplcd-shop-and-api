export const cleanNameProduct = (name: string) =>
    name
        .replace(/DISP \| |LCD \| |TOUCH \| |BLACK/i, "")
        .replace(/BLACK |WHITE |GOLDEN |BLUE/i, "")
        .replace(/OR|INCELL|or|oled|super amoled|aaa|original|in-cell|cof|cog|Or/i,"");

export const getDescription = (name: string) => {
    if(name.includes('DISP')) return 'Display completo';
    if(name.includes('LCD')) return 'LCD';
    if(name.includes('TOUCH')) return 'Touch';
}

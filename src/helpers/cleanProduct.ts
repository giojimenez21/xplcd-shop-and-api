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

export const getTypeProduct = (name: string) => name.split(" ")[name.split(" ").length - 1];

export const getColorProduct = (name: string) => name.split(" ")[name.split(" ").length - 2];

export const setPriceProduct = (price: number) => price + 50;

export const cleanNameProduct = (name: string) => {
    return name
        .replace(/DISP \| |LCD \| |TOUCH \| |BLACK/i, "")
        .replace(/BLACK |WHITE |GOLDEN |BLUE/i, "")
        .replace(/OR|INCELL|or|oled|super amoled|aaa|original|in-cell|cof|cog|Or/i,"");
};

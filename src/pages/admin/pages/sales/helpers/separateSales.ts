import { Sale } from "../../../../../context";


export const separateSales = (sales: Sale[]) => {
    const salesOpened:Sale[] = [], salesClosed:Sale[] =[];
    sales.forEach(sale => sale.status === 'OPEN' ? salesOpened.push(sale) : salesClosed.push(sale));
    return {
        salesOpened,
        salesClosed
    }
}
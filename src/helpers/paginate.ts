export const generatePaginate = (page: number, limit: number) => ({
    offset: page > 1 ? (page - 1) * limit : 0,
    limit,
});

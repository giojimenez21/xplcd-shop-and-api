import { Model } from "sequelize";

export const generatePaginate = (page: number, limit: number) => ({
    offset: page > 1 ? (page - 1) * limit : 0,
    limit,
});

export const addPreviousAndNext = (
    data: { count: number; rows: Model[] },
    limit: number,
    page: number
) => ({
    previousPage: page > 1 && true,
    nextPage: (data.count / limit) > page ? true : false,
    data: data.rows,
});

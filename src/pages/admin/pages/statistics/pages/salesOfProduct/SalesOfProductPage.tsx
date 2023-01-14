import moment from "moment";
import { useEffect, useState } from "react";

import { SaleOfProduct } from "./interface";
import { useAxios } from "../../../../../../hooks";
import { TableSalesOfProducts } from "./components";
import { DatePicker } from "../../../../../../components";
import { ContainerStyled, SpinnerStyled } from "../../../../../../styled-components";

const SalesOfProductPage = () => {
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
    const { isLoading, response: salesOfProduct, request } = useAxios<SaleOfProduct[]>([], {
        url: `/admin/getStockProductsOfDate?startDate=${startDate}&endDate=${endDate}`,
        enable: false
    });
    
    useEffect(() => {
        request();
    }, [startDate, endDate])

    if( isLoading ) {
        return <SpinnerStyled />
    }

    return (
        <ContainerStyled margin="2rem auto" padding="0 1rem">
            <DatePicker propsDate={{ startDate, endDate, setStartDate, setEndDate }}/>
            <TableSalesOfProducts salesOfProducts={salesOfProduct}/>
        </ContainerStyled>
    )
}

export default SalesOfProductPage;
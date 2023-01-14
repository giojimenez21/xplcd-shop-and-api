import moment from "moment";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import {  TableStock } from "./components";
import { ResponseStock } from "./interface";
import { useAxios } from "../../../../../../hooks";
import { DatePicker } from "../../../../../../components";
import { ContainerStyled, SpinnerStyled } from "../../../../../../styled-components";

const StockPage = () => {
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
    const { isLoading, response: stock, request } = useAxios<ResponseStock[]>([], {
        url: `/admin/getStockForReport?startDate=${startDate}&endDate=${endDate}`,
        enable: false
    });
    
    useEffect(() => {
        request();
    }, [startDate, endDate])
    

    if (isLoading) {
        return <SpinnerStyled />;
    }

    return (
        <ContainerStyled margin="2rem auto" padding="0 1rem">
            <DatePicker propsDate={{startDate, endDate, setStartDate, setEndDate}}/>
            <Text fontSize="sm" fontWeight="semibold" marginBottom="1rem">
                *La cantidad inicial es registrada a las 10 am y la final a las 6pm
                <br/>
                *Si esta consultando la cantidad final antes de las 6pm está sera igual a la inicial.
            </Text>
            <TableStock stock={stock} />
        </ContainerStyled>
    );
};

export default StockPage;

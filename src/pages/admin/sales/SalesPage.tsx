import { useContext, useEffect } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { Order } from "./components";
import { useAxios } from "../../../hooks";
import { separateSales } from "./helpers";
import { SalesContainer } from "./styled-components";
import { ProductContext, Sale } from "../../../context";
import { SpinnerStyled } from "../../../styled-components";


const SalesPage = () => {
    const { productState, dispatchProduct } = useContext(ProductContext);
    const { isLoading, response: sales } = useAxios<Sale[]>([], {
        url: "/products/sales",
        method: "GET",
    });

    useEffect(() => {
        const { salesOpened, salesClosed } = separateSales(sales);
        dispatchProduct({ type: "addSales", payload: { salesOpened, salesClosed }});
    }, [sales, isLoading]);

    if (isLoading) {
        return <SpinnerStyled />;
    }

    return (
        <SalesContainer>
            <Tabs variant="soft-rounded" colorScheme="purple">
                <TabList>
                    <Tab>Abiertos</Tab>
                    <Tab>Cerrados</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {productState.salesOpened.map((sale) => (
                            <Order key={sale.id} order={sale} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {productState.salesClosed.map((sale) => (
                            <Order key={sale.id} order={sale} />
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </SalesContainer>
    );
};

export default SalesPage;

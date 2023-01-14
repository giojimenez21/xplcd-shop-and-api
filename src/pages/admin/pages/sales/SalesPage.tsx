import { useContext, useEffect } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { Order } from "./components";
import { separateSales } from "./helpers";
import { useAxios } from "../../../../hooks";
import { SalesContainer } from "./styled-components";
import { ProductContext, Sale } from "../../../../context";
import { AlertStyled, SpinnerStyled } from "../../../../styled-components";




const SalesPage = () => {
    const { productState, dispatchProduct } = useContext(ProductContext);
    const { isLoading, response: sales } = useAxios<Sale[]>([], {
        url: "/admin/sales",
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
                        {productState.salesOpened.length > 0 ? (
                            productState.salesOpened.map((sale) => (
                                <Order key={sale.id} order={sale} />
                            ))
                        ) : (
                            <AlertStyled status="warning">
                                No hay pedidos en esta sección
                            </AlertStyled>
                        )}
                    </TabPanel>
                    <TabPanel>
                        {productState.salesClosed.length > 0 ? (
                            productState.salesClosed.map((sale) => (
                                <Order key={sale.id} order={sale} />
                            ))
                        ) : (
                            <AlertStyled status="warning">
                                No hay pedidos en esta sección
                            </AlertStyled>
                        )}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </SalesContainer>
    );
};

export default SalesPage;

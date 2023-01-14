import { FC, useRef } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

import { SaleOfProduct } from "../interface";
import { ButtonCustom } from "../../../../../../../components";
import { generateXLSX } from "../../../../../../../helpers/generateXlsx";
import ExportToXLSX from "../../../../../../../components/ui/ExportToXLSX";

interface IProps {
    salesOfProducts: SaleOfProduct[];
}

const TableSalesOfProduct: FC<IProps> = ({ salesOfProducts }) => {
    const tableRef = useRef(null);
    return (
        <>
            <ExportToXLSX
                nameToFile="ventas_por_producto"
                dataRef={tableRef}
                disabled={salesOfProducts.length === 0}
            />
            <Table variant="simple" ref={tableRef}>
                <Thead>
                    <Tr position="sticky" top={0} backgroundColor="white">
                        <Th>Nombre</Th>
                        <Th>Cantidad vendida</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {salesOfProducts.map((product) => (
                        <Tr key={product.id}>
                            <Td>{product.name}</Td>
                            <Td>{product.product_uom_qty}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
};

export default TableSalesOfProduct;

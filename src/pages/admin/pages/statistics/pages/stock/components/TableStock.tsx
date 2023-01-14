import moment from "moment";
import { FC, Fragment, useRef } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ResponseStock } from "../interface";
import { ExportToXLSX } from "../../../../../../../components";

interface IProps {
    stock: ResponseStock[];
}

const TableStock: FC<IProps> = ({ stock }) => {
    const tableRef = useRef(null);
    return (
        <>
            <ExportToXLSX 
                nameToFile="stock"
                dataRef={tableRef}
                disabled={ stock.length === 0 }
            />
            <Table variant="simple" ref={tableRef}>
                <Thead>
                    <Tr position="sticky" top={0} backgroundColor="white">
                        <Th>Fecha</Th>
                        <Th>Nombre</Th>
                        <Th>Inicial</Th>
                        <Th>Final</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stock.map((stockItem) => (
                        <Fragment key={stockItem.id}>
                            <Tr>
                                <Td rowSpan={4}>
                                    {moment(stockItem.createdAt).format("DD-MM-YYYY")}
                                </Td>
                                <Td>100P</Td>
                                <Td>{stockItem.initial100P}</Td>
                                <Td>{stockItem.final100P}</Td>
                                <Td>
                                    {stockItem.initial100P -
                                        stockItem.final100P}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>320P</Td>
                                <Td>{stockItem.initial320P}</Td>
                                <Td>{stockItem.final320P}</Td>
                                <Td>
                                    {stockItem.initial320P -
                                        stockItem.final320P}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>WH</Td>
                                <Td>{stockItem.initialWh}</Td>
                                <Td>{stockItem.finalWh}</Td>
                                <Td>
                                    {stockItem.initialWh - stockItem.finalWh}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>GAR</Td>
                                <Td>{stockItem.initialGar}</Td>
                                <Td>{stockItem.finalGar}</Td>
                                <Td>
                                    {stockItem.initialGar - stockItem.finalGar}
                                </Td>
                            </Tr>
                        </Fragment>
                    ))}
                </Tbody>
            </Table>
        </>
    );
};

export default TableStock;

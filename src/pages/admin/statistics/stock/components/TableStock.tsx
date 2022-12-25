import moment from "moment";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { ResponseStock } from "../interface";

interface IProps {
    stock: ResponseStock[];
}

const TableStock: FC<IProps> = ({ stock }) => {
    return (
        <Table variant="simple">
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
                    <>
                        <Tr>
                            <Td rowSpan={4}>
                                {moment(stockItem.createdAt.toString()).format("DD-MM-YYYY")}
                            </Td>
                            <Td>100P</Td>
                            <Td>{stockItem.initial100P}</Td>
                            <Td>{stockItem.final100P}</Td>
                            <Td>
                                {stockItem.initial100P - stockItem.final100P}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>320P</Td>
                            <Td>{stockItem.initial320P}</Td>
                            <Td>{stockItem.final320P}</Td>
                            <Td>
                                {stockItem.initial320P - stockItem.final320P}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>WH</Td>
                            <Td>{stockItem.initialWh}</Td>
                            <Td>{stockItem.finalWh}</Td>
                            <Td>{stockItem.initialWh - stockItem.finalWh}</Td>
                        </Tr>
                        <Tr>
                            <Td>GAR</Td>
                            <Td>{stockItem.initialGar}</Td>
                            <Td>{stockItem.finalGar}</Td>
                            <Td>{stockItem.initialGar - stockItem.finalGar}</Td>
                        </Tr>
                    </>
                ))}
            </Tbody>
        </Table>
    );
};

export default TableStock;

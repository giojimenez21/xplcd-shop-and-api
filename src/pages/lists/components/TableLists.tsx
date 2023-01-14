import { FC, useId } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

import { List } from "../interface";

interface IProps {
    lists: List[];
}

const TableLists: FC<IProps> = ({ lists }) => {
    return (
        <TableContainer>
            {lists.map((list) => (
                <Table
                    variant="striped"
                    marginBottom="4rem"
                    key={list.id + list.name}
                >
                    <Thead>
                        <Tr>
                            <Th
                                colSpan={10}
                                backgroundColor={list.color}
                                textAlign="center"
                                color="white"
                                fontSize="3xl"
                            >
                                {list.name}
                            </Th>
                        </Tr>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Calidad</Th>
                            {list.products_by_lists[0]?.prices.map((field) => (
                                <Th key={ useId() }>{field.list}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {list.products_by_lists.map((product) => (
                            <Tr key={product.name + product.quality}>
                                <Td>{product.name}</Td>
                                <Td>{product.quality}</Td>
                                {product.prices.map((fieldProduct) => (
                                    <Td key={ useId() }>
                                        {fieldProduct.price}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ))}
        </TableContainer>
    );
};

export default TableLists;

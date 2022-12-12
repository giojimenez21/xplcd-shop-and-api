import { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Badge,
} from "@chakra-ui/react";
import { ResponseAllUsers } from "../interface";
import { UsersContainer } from "../styled-components";
import { Link } from "react-router-dom";

interface IProps {
    users: ResponseAllUsers[];
}

const TableUsers: FC<IProps> = ({ users }) => {
    return (
        <UsersContainer>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Correo electrónico</Th>
                            <Th>Rol</Th>
                            <Th>Acceso a listas</Th>
                            <Th>Editar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user) => (
                            <Tr key={user.name + user.email}>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.role}</Td>
                                <Td>
                                    <Badge
                                        colorScheme={
                                            user.access_to_lists
                                                ? "green"
                                                : "red"
                                        }
                                    >
                                        {user.access_to_lists
                                            ? "Activado"
                                            : "Desactivado"}
                                    </Badge>
                                </Td>
                                <Td>
                                    <Link to={`/editarUsuario/${user.id}`}>
                                        <AiFillEdit />
                                    </Link>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </UsersContainer>
    );
};

export default TableUsers;
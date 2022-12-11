import { FC } from "react";
import { FaUserAlt } from "react-icons/fa"
import { Icon, Text } from "@chakra-ui/react"

import FormEditUser from "./FormEditUser";
import { ResponseUser } from "../interface"
import { CardContainer } from "../styled-components"

interface IProps {
    user: ResponseUser;
}

const CardEditUser:FC<IProps> = ({user}) => {
    return (
        <CardContainer>
            <Icon as={FaUserAlt} fontSize="5xl" color="secondary" margin="auto"/>
            <Text fontWeight="bold">Nombre: {user.name}</Text>
            <Text fontWeight="bold">Correo: {user.email}</Text>
            <FormEditUser valuesForm={{id: user.id, role: user.role}}/>
        </CardContainer>
    )
}

export default CardEditUser
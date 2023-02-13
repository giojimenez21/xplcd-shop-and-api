import { Text } from "@chakra-ui/react";
import React from "react";
import { ContainerStyled } from "../../styled-components";

const AboutUs = () => {
    return (
        <ContainerStyled padding="2rem 0">
            <Text fontSize="3xl" fontWeight="bold" as="h1" marginBottom="1rem">
                ¿Quiénes somos?
            </Text>
            <Text lineHeight="2rem">
                Desde nuestra llegada al mercado mexicano, en el equipo de XP LCD FACTORY  nos dedicamos a la importación y distribución de pantallas celulares, manufacturadas con altos estándares de calidad. A através de nuestro proceso logístico y operativo, XP busca conectar al grueso de la población mexicana con la tecnología celular y de vanguardia necesaria para navegar dentro de un mundo en constante interconección digital y flujo de información.
            </Text>
        </ContainerStyled>
    );
};

export default AboutUs;

import { Box, Image, Text } from "@chakra-ui/react";

import Local101 from "../../assets/local101.jpg";
import Local320 from "../../assets/local320.jpg";
import { ContainerStyled } from "../../styled-components";

const Offices = () => {
    return (
        <ContainerStyled padding="2rem 0">
            <Text fontSize="3xl" fontWeight="bold">
                Local #101
            </Text>
            <Text>
                Eje Central Lázaro Cárdenas 87, Colonia Centro, Centro,
                Cuauhtémoc, 06000 Ciudad de México, CDMX
            </Text>
            <Image src={Local101} margin="2rem auto" display="block" />

            <Text fontSize="3xl" fontWeight="bold">
                Local #320&321
            </Text>
            <Text>
                Eje Central Lázaro Cárdenas 87, Colonia Centro, Centro,
                Cuauhtémoc, 06000 Ciudad de México, CDMX
            </Text>
            <Image src={Local320} margin="1rem auto" display="block" />
        </ContainerStyled>
    );
};

export default Offices;
